import flatten from 'lodash/flatten';
import { getImportsVariables } from './utils/imports';
import { getExportsVariables } from './utils/exports';
import { mdxJsxFromMarkdown, mdxJsxToMarkdown } from 'mdast-util-mdx-jsx';
import { toMarkdown } from 'mdast-util-to-markdown';
import { fromMarkdown } from 'mdast-util-from-markdown';
import {mdxJsx} from 'micromark-extension-mdx-jsx'
import * as acorn from 'acorn';
import { formatter } from './utils/format';


const addComponentsProps = (scopes: string[]) => (node: any, idx: number) => {

  const scope = `{props, ${scopes.join(',')}}`

  const code = toMarkdown(node.children[0], {
    extensions: [mdxJsxToMarkdown()],
  });

  const out = toMarkdown(node, {
    extensions: [mdxJsxToMarkdown()],
  });

  const tree:any = fromMarkdown(out.replace('<Playground',`<Playground code={${code}} scope={${scope}}`), {
    extensions: [mdxJsx({acorn: acorn, addResult: true})],
    mdastExtensions: [mdxJsxFromMarkdown()]
  })

  node.attributes = [
    ...tree.children[0].attributes,
    ...node.attributes,
  ];
};

export interface PluginOpts {
  root: string;
}

export const injectCodeToPlayground =
  () => (tree: any, file: { contents: string }) => {
    const playgroundComponents: Node[] = tree.children
      .filter((node: any) => node.type === 'mdxJsxFlowElement')
      .filter((node) => {
        return node.name === 'Playground';
      });

    const importNodes = tree.children.filter((n: any) =>
      n.value?.includes('import')
    );
    //.filter((n: any) => !n.value?.split(';')[0]);
    const exportNodes = tree.children.filter((n: any) =>
      n.value?.includes('export')
    );

    const importedScopes = flatten<string>(
      importNodes.map(getImportsVariables)
    );

    const exportedScopes = flatten<string>(
      exportNodes.map(getExportsVariables)
    ); // TODO exports not working, migrate to es lexer
    // filter added to avoid throwing if an unexpected type is exported
    const scopes: string[] = [...importedScopes, ...exportedScopes].filter(
      Boolean
    );
    playgroundComponents.forEach(addComponentsProps(scopes));

    return tree;
  };
