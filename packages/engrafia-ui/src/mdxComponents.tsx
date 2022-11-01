import { Text } from '@nextui-org/react';
import Link from 'next/link';
import { Code } from './Components/CodeBlock/Clode';
import { Table, TCol, THead, TRow, Input } from './Components/Table/Table';

export const mdxComponents = {
  code: Code,
  a: Link,
  table: Table,
  thead: THead,
  tr: TRow,
  td: TCol,
  input: Input,
};
