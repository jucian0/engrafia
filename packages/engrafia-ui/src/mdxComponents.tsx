import Image from 'next/image';
import { Code } from './Components/CodeBlock/Clode';

export const mdxComponents = {
  code: Code,
  //  img: (props: any) => (<Image {...props} layout="fill" />) as any,
};
