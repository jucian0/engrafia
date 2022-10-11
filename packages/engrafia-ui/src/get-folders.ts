import { SidebarTree } from './get-sidebar';

export function getFolderName(tree: SidebarTree, regex: RegExp) {
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

export function getFolderContent(tree: SidebarTree, paths: string[]) {
  let sidebar = {};

  for (let i = 0; i < paths.length; i++) {
    sidebar = findTreeInPath(tree, paths[i]);
    console.log(sidebar, tree, paths);
  }
  return sidebar;
}

function findTreeInPath(tree: SidebarTree, path: string): any {
  path = path.replace(/^\/|\/$/g, '');
  if (!tree?.children?.length) {
    return null;
  }
  if (tree.path === path) {
    return tree;
  }
  for (let child of tree.children) {
    let found = findTreeInPath(child, path);
    if (found) {
      return found;
    }
  }
}
