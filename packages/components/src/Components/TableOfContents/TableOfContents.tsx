import * as S from './styles';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ChildrenOfContent, useSiteConfig } from '../../Provider';
import { useTranslate } from '../../useTranslation';

export function TableOfContent() {
  const { tableOfContent } = useSiteConfig();
  const t = useTranslate();

  if (!tableOfContent) {
    return null;
  }

  return (
    <S.TableOfContentWrapper hideIn="sm">
      <div>
        <h3>{t('table.of.content')}</h3>
        <ul>
          {tableOfContent.children &&
            tableOfContent.children.map((item) => (
              <TableOfContentItem key={item.slug} item={item} />
            ))}
        </ul>
      </div>
    </S.TableOfContentWrapper>
  );
}

type Props = {
  item: ChildrenOfContent;
};

function TableOfContentItem({ item }: Props) {
  const route = useRouter();

  const isActive = route.asPath.includes(item.slug);

  return (
    <>
      <S.ItemLink className={isActive ? S.active() : S.inactive()}>
        <Link href={item.slug}>{item.title}</Link>
      </S.ItemLink>
      {item.children &&
        item.children.length > 0 &&
        item.children.map((child) => (
          <TableOfContentItem item={child} key={child.slug} />
        ))}
    </>
  );
}
