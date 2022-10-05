export type SidebarTree = Category;

type File = {
  name: string;
  path: string;
  relativePath: string;
  title: string;
  url: string;
  meta: {
    title: string;
    description: string;
  };
};

type Category = {
  name: string;
  path: string;
  title: string;
  children: Array<Category & File>;
};

export function getSidebarTree(): SidebarTree {
  try {
    return require('root_folder/sidebar.json');
  } catch (err) {
    return {
      name: 'pages',
      title: 'Pages',
      children: [],
      path: '/',
    };
  }
}
