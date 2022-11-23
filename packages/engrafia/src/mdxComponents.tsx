import { Image } from '@nextui-org/react';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { Code } from './Components/CodeBlock/Code';
import { Table, TCol, THead, TRow, Input } from './Components/Table/Table';

function MDXLink(props: React.PropsWithChildren<LinkProps>) {
  return <Link {...props}>{props.children}</Link>;
}

export const mdxComponents = {
  code: Code,
  a: MDXLink,
  table: Table,
  thead: THead,
  tr: TRow,
  td: TCol,
  input: Input,
  img: Image,
};
