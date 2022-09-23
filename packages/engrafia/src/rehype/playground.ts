import flatten from 'lodash/flatten';
import { getImportsVariables } from './utils/imports';
import { getExportsVariables } from './utils/exports';
import { mdxJsxToMarkdown } from 'mdast-util-mdx-jsx';
import { toMarkdown } from 'mdast-util-to-markdown';

const addComponentsProps = (scopes: string[]) => (node: any, idx: number) => {
  const out = toMarkdown(node.children[0], {
    extensions: [mdxJsxToMarkdown()],
  });

  console.log(node.children, '<<<<<<<<');

  node.attributes = [
    ...node.attributes,
    {
      type: 'mdxJsxAttribute',
      name: 'code',
      value: out,
    },
    {
      type: 'mdxJsxAttribute',
      name: 'scope',
      value: scopes.toString(),
    },
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
