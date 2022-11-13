import { SidebarTree } from './get-sidebar';

export function getFolderName(tree: SidebarTree, regex: RegExp) {
  let filePath: string[] = [];

  function evaluate(tree: SidebarTree, regex: RegExp) {
    for (let index = 0; index < tree.children.length; index++) {
      if (tree.children[index].children) {
        const test = new RegExp(regex).test(tree.children[index].name);
        if (test) {
          filePath.push(tree.children[index].name);
        } else evaluate(tree.children[index], regex);
      }
    }
  }

  evaluate(tree, regex);
  return filePath;
}

export function getFolderContent(tree: SidebarTree, paths: string[]) {
  const length = paths.length;
  let sidebar = {} as SidebarTree;

  function evaluate(tree: SidebarTree, index: number) {
    if (index === length) {
      sidebar = tree;
    } else {
      for (let i = 0; i < tree.children.length; i++) {
        if (tree.children[i].name === paths[index]) {
          evaluate(tree.children[i], index + 1);
        }
      }
    }
  }
  evaluate(tree, 0);
  return sidebar;
}
