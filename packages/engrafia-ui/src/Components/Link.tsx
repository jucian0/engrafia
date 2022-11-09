import * as L from 'next/link';
import { useRouter } from 'next/router';

export function Link(props: L.LinkProps) {
  const { locale } = useRouter();
  const href = props.href;

  if (locale) {
    return <L.default {...props} href={href.toString().concat(locale)} />;
  }
  return <L.default {...props} href={href} />;
}
