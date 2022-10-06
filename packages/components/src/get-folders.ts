import { SidebarTree } from './get-sidebar';

export function getFolder(tree: SidebarTree, regex: RegExp) {
  let filePath: string[] = [];

  function evaluate(tree: SidebarTree, regex: RegExp) {
    tree.children.forEach((child) => {
      if (child.children) {
        const test = new RegExp(regex).test(child.name);
        if (test) {
          filePath.push(child.name);
        }
        evaluate(child, regex);
      }
    });
  }

  evaluate(tree, regex);

  return filePath;
}
