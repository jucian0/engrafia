import * as L from 'next/link';
import React from 'react';

import { useRouter } from 'next/router';
import { useEngrafiaConfig } from '../EngrafiaProvider';

export function Link(props: React.PropsWithChildren<L.LinkProps>) {
  const { locale } = useRouter();
  const { themeConfig } = useEngrafiaConfig();
  const href = props.href ?? '/';

  if (locale && href.toString().includes(themeConfig.rootDocs ?? 'docs')) {
    return <L.default {...props} href={href.toString().concat(`.${locale}`)} />;
  }
  return <L.default {...props} href={href} />;
}
