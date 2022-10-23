import Image from 'next/image';
import Link from 'next/link';
import { Code } from './Components/CodeBlock/Clode';

export const mdxComponents = {
  code: Code,
  a: Link,
  //  img: (props: any) => (<Image {...props} layout="fill" />) as any,
};
