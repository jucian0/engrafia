import { SidebarTree, DocFile } from '../../get-sidebar';

export function getSearchableList(content: SidebarTree) {
  let contentList: DocFile[] = [];
  function evaluate(tree: SidebarTree): any {
    for (let index = 0; index < tree.children.length; index++) {
      if (tree.children[index].children) {
        evaluate(tree.children[index]);
      } else {
        contentList.push(tree.children[index]);
      }
    }
  }
  evaluate(content);
  return contentList;
}

export function filterItems(list: DocFile[]) {
  return list.filter((item, index, self) => {
    return index === self.findIndex((t) => t.url === item.url);
  });
}
