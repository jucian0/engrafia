import React from 'react';

export type ChildrenOfContent = {
  title: string;
  slug: string;
  children?: ChildrenOfContent[];
};

export type TableOfContentType = {
  children?: ChildrenOfContent[];
  depth: number;
};

export type ThemeContextType = {
  meta: { [key: string]: string };
  tableOfContent: TableOfContentType;
  setSiteConfig?: React.Dispatch<React.SetStateAction<ThemeContextType>>;
  language: string;
  languages?: string[];
  version?: string;
  versions?: string[];
};

export const ThemeContext = React.createContext({} as ThemeContextType);
