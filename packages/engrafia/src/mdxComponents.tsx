import Link, { LinkProps } from 'next/link';
import React from 'react';
import { Code } from './Components/CodeBlock/Clode';
import { Table, TCol, THead, TRow, Input } from './Components/Table/Table';

function MDXLink(
  props: React.PropsWithChildren<LinkProps>,
  ref: React.Ref<HTMLAnchorElement>
) {
  return <Link {...props}>{props.children}</Link>;
}

export const mdxComponents = {
  code: Code,
  a: React.forwardRef(MDXLink),
  table: Table,
  thead: THead,
  tr: TRow,
  td: TCol,
  input: Input,
};
