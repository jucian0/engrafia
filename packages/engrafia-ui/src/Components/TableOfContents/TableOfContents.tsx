import * as S from './styles';
import Link from 'next/link';
import { useSiteConfig } from '../../Provider';
import { useTranslation } from '../../useTranslation';
import { ChildrenOfContent } from '../../ThemeContext';
import React from 'react';

export function TableOfContent() {
  const { tableOfContent } = useSiteConfig();
  const [activeId, setActiveId] = React.useState('');
  const t = useTranslation();

  React.useEffect(() => {
    const onScroll = () => {
      const ids = tableOfContent.children
        ?.map((item) => [
          item.id,
          ...(item.children?.map((child) => child.id) || []),
        ])
        .flat()
        .reverse();
      const activeId = ids?.find((id) => {
        const element = document.getElementById(id);
        if (!element) return false;
        const { top } = element.getBoundingClientRect();
        const { scrollMarginTop } = getComputedStyle(element);
        return top - parseInt(scrollMarginTop) <= 80;
      });
      if (activeId) {
        setActiveId(activeId);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [tableOfContent]);

  if (!tableOfContent) {
    return null;
  }

  return (
    <S.TableOfContentWrapper hideIn="sm">
      <div>
        <h3>{t('table.of.content') ?? 'Table of content'}</h3>
        <ul>
          {tableOfContent.children &&
            tableOfContent.children.map((item) => (
              <TableOfContentItem
                key={item.slug}
                item={item}
                activeId={activeId}
              />
            ))}
        </ul>
      </div>
    </S.TableOfContentWrapper>
  );
}

type Props = {
  item: ChildrenOfContent;
  activeId: string;
};

function TableOfContentItem({ item, activeId }: Props) {
  return (
    <li>
      {item.children && (
        <S.Line className={activeId === item.id ? S.active() : S.inactive()} />
      )}
      <S.Another className={activeId === item.id ? S.active() : S.inactive()} />

      <S.ItemLink
        id={item.id}
        className={activeId === item.id ? S.active() : S.inactive()}
      >
        <Link href={item.slug ?? '.'}>
          <a>{item.title ?? '.'}</a>
        </Link>
      </S.ItemLink>
      <ul>
        {item.children &&
          item.children.length > 0 &&
          item.children.map((child) => (
            <TableOfContentItem
              item={child}
              key={child.slug}
              activeId={activeId}
            />
          ))}
      </ul>
    </li>
  );
}
