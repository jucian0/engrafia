import { SidebarTree, DocFile } from '../../get-sidebar';

export function getSearchableList(content: SidebarTree) {
  let contentList: DocFile[] = [];

  function evaluate(tree: SidebarTree) {
    tree.children.forEach((child) => {
      if (child.children) {
        return evaluate(child);
      } else {
        contentList.push(child);
      }
    });
  }

  evaluate(content);

  return contentList;
}
