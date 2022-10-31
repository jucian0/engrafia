import Link from 'next/link';
import { Table } from '@nextui-org/react';
import { Code } from './Components/CodeBlock/Clode';

export const mdxComponents = {
  code: Code,
  a: Link,
  table: Table,
  thead: Table.Header,
  tr: Table.Row,
  td: Table.Column,
};
