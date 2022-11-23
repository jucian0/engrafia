import { Meta } from './get-theme-config';

export type SidebarTree = Category;

export type DocFile = {
  name: string;
  path: string;
  relativePath: string;
  title: string;
  url: string;
  meta: Meta;
};

export type Category = {
  name: string;
  path: string;
  title: string;
  children: Array<Category & DocFile>;
};

export const sidebarFallback = {
  name: 'pages',
  title: 'Pages',
  children: [],
  path: '/',
};

export async function getSidebarTree(): Promise<SidebarTree> {
  try {
    const { default: sidebar } = await import(
      'root_folder/sidebar.json' as any
    );
    return sidebar;
  } catch (err) {
    return Promise.resolve(sidebarFallback);
  }
}
