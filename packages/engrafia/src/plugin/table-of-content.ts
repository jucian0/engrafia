import { selectAll } from 'hast-util-select';
import makeToc from 'mdast-util-toc';
import visit from 'unist-util-visit';
import { Node } from 'unist';

type TNode = {
  children: TNode[];
  depth: number;
  url?: string;
  title?: string;
  value?: string;
  slug?: string;
  id?: string;
} & Node;

export function generateTableOfContents(root: any) {
  const toc: any = makeToc(root);
  return getItems(toc?.map, { depth: 0 } as TNode);
}

function getItems(node: TNode, current: TNode): any {
  if (!node) {
    return {};
  } else if (node.type === `paragraph`) {
    visit(node, (item: any) => {
      if (item.type === `link`) {
        current.slug = item.url;
        current.id = item?.url?.replace('#', '');
      }
      if (item.type === `text`) {
        current.title = item.value;
      }
    });
    return current;
  } else {
    if (node.type === `list`) {
      current.children = node.children.map((i) =>
        getItems(i, { depth: current.depth + 1 } as TNode)
      );
      return current;
    } else if (node.type === `listItem`) {
      const heading = getItems(node.children[0], {
        depth: current.depth,
      } as TNode);
      if (node.children.length > 1) {
        getItems(node.children[1], heading);
      }
      return heading;
    }
  }
  return {};
}

export const addClasses = (
  additions: { [s: string]: unknown } | ArrayLike<unknown>
) => {
  const adders = Object.entries(additions).map(adder);
  return (node: any) => adders.forEach((a) => a(node));
};

const adder = ([selector, className]: any[]) => {
  const writer: any = write(className);
  return (node: any) => selectAll(selector, node).forEach(writer);
};

const write = (className: any) =>
  function ({ properties }: any) {
    if (!properties.className) properties.className = className;
    else properties.className += ` ${className}`;
  };
