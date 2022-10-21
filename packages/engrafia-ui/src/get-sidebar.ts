export type SidebarTree = Category;

export type DocFile = {
  name: string;
  path: string;
  relativePath: string;
  title: string;
  url: string;
  meta: {
    title: string;
    description: string;
    position?: string;
  };
};

export type Category = {
  name: string;
  path: string;
  title: string;
  children: Array<Category & DocFile>;
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
