import flatten from 'lodash/flatten';
//import { toString } from 'hast-util-to-string';
import { formatter } from './utils/format';
import { componentName, sanitizeCode, removeTags } from './utils/jsx';
import { getImportsVariables } from './utils/imports';
import { getExportsVariables } from './utils/exports';
import { visit } from 'unist-util-visit';
import { mdxJsxFromMarkdown, mdxJsxToMarkdown } from 'mdast-util-mdx-jsx';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { toMarkdown } from 'mdast-util-to-markdown';

//import { toText } from 'hast-util-to-text';
//import { toString } from 'mdast-util-to-string';

const addComponentsProps = (scopes: string[]) => (node: any, idx: number) => {
  // const name = componentName(node.value);
  // const tagOpen = new RegExp(`^\\<${name}`);
  // const formatted = formatter(toString(node));
  // const code = formatted.slice(1, Infinity);
  const scope = scopes.join(',');
  // const child = sanitizeCode(removeTags(code));
  // const newTag = `<${name} __position={${idx}} code={'${child}'} scope={${scope}}`;
  // node.value = node.value.replace(tagOpen, newTag);

  // console.log(toString(node).trim());

  const out = toMarkdown(node, { extensions: [mdxJsxToMarkdown()] });

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
      value: scope,
    },
  ];
};

export interface PluginOpts {
  root: string;
}

export const injectCodeToPlayground =
  () => (tree: any, file: { contents: string }) => {
    const playgroundComponents: Node[] = tree.children.filter(
      (node: any) => node.type === 'mdxJsxFlowElement'
    );
    // .filter((node) => {
    // const name = componentName(node.value);
    // return isPlayground(name);
    // });

    const importNodes = tree.children.filter((n: any) => n.type === 'mdxjsEsm');
    const exportNodes = tree.children.filter((n: any) => n.type === 'mdxjsEsm');
    const importedScopes = flatten<string>(
      importNodes.map(getImportsVariables)
    );
    console.log(importNodes);
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
