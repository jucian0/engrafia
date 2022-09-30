export type SidebarTree = {
  path: string;
  name: string;
  children: SidebarTree[];
  meta?: {
    title: string;
    description: string;
  };
};

export function getSidebarTree(): SidebarTree {
  try {
    return require('root_folder/sidebar.json');
  } catch (err) {
    return {
      name: 'pages',
      children: [],
      path: '/',
    };
  }
}
