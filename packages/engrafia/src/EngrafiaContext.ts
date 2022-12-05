import React from 'react';
import { I18nConfig } from './get-i18n';
import { SidebarTree } from './get-sidebar';
import { ThemeConfig } from './get-theme-config';

export type ChildrenOfContent = {
  title: string;
  slug: string;
  children?: ChildrenOfContent[];
  id: string;
};

export type TableOfContentType = {
  children?: ChildrenOfContent[];
  depth: number;
};

export type EngrafiaContextType = {
  tableOfContent: TableOfContentType;
  setSiteConfig?: React.Dispatch<React.SetStateAction<EngrafiaContextType>>;
  version?: string;
  versions?: string[];
  sidebar: SidebarTree;
  translations: I18nConfig;
  themeConfig: ThemeConfig;
};

export const EngrafiaContext = React.createContext({} as EngrafiaContextType);
