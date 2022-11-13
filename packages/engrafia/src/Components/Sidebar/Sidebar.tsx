import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as S from './styles';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';
import { Category, DocFile } from '../../get-sidebar';
import { filterSidebarContent } from './util';
import { useTranslation } from '../../useTranslation';
import { useEngrafiaConfig } from '../../EngrafiaProvider';

export function Sidebar({ hide = true }) {
  const { sidebar } = useEngrafiaConfig();
  const router = useRouter();
  const { locale } = router;
  const t = useTranslation();
  const [toggle, setToggle] = React.useState(['']);

  function isActive(path: string) {
    return path === router.asPath;
  }

  function isOpened(item: DocFile) {
    return toggle?.includes(item.relativePath);
  }

  const handleClick = React.useCallback(
    (relativePath: string) => {
      const index = toggle.indexOf(relativePath);
      if (index >= 0) {
        setToggle((state) => state.filter((path) => path !== relativePath));
      } else {
        setToggle((state) => state.concat([relativePath]));
      }
    },
    [sidebar, toggle]
  );

  React.useEffect(() => {
    const opened = sidebar?.children?.map((e) => e.relativePath);
    setToggle(opened);
  }, [sidebar]);

  function recursiveMenu(menu: Category & DocFile) {
    return (
      <S.List key={menu.path}>
        {menu.meta ? (
          <S.Link className={isActive(menu.url) ? S.active() : S.inactive()}>
            <S.Tag
              css={isActive(menu.url) ? { background: '$accents8' } : {}}
            />
            <Link href={menu.url}>
              <a>{menu.meta.title.trim()}</a>
            </Link>
          </S.Link>
        ) : (
          <S.Category onClick={() => handleClick(menu.relativePath)}>
            {locale ? t(menu.name) : menu.title}
            {isOpened(menu) ? <MdExpandMore /> : <MdChevronRight />}
          </S.Category>
        )}
        {isOpened(menu) &&
          filterSidebarContent(menu?.children, router.locale)?.map(
            (item: Category & DocFile) => {
              if (item.meta) {
                return (
                  <S.Item key={item.path}>
                    <S.Link
                      className={isActive(item.url) ? S.active() : S.inactive()}
                    >
                      <S.Tag
                        css={
                          isActive(item.url) ? { background: '$accents8' } : {}
                        }
                      />
                      <Link href={item.url}>
                        <a>{item.meta.title.trim()}</a>
                      </Link>
                    </S.Link>
                  </S.Item>
                );
              }

              return recursiveMenu(item);
            }
          )}
      </S.List>
    );
  }
  return (
    <S.SidebarWrapper hideIn={hide ? 'xs' : undefined}>
      <div className="wrapper">
        {filterSidebarContent(sidebar?.children, router.locale)?.map?.(
          (child) => recursiveMenu(child)
        )}
      </div>
    </S.SidebarWrapper>
  );
}
