import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSiteConfig } from '../../Provider';
import * as S from './styles';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';
import { getSidebarTree } from '../../get-sidebar';
import { getThemeConfig } from '../../get-theme-config';
import { getFolderContent } from '../../get-folders';

const sidebar = getSidebarTree();
const { default: themeConfig } = getThemeConfig();

export function Sidebar({ hide = true }) {
  const { language, version } = useSiteConfig();
  const router = useRouter();
  const [toggle, setToggle] = React.useState(router.asPath);

  function resolveSidebar() {
    const paths = [version, language, themeConfig.rootDocs].filter(
      (p) => p
    ) as string[];

    const data = getFolderContent(sidebar, paths);
    console.log(data);
    return data;
  }

  function isActive(path: string) {
    return path === router.asPath;
  }

  function isOpened(item: any) {
    return true; //toggle.includes(item.name);
  }

  const handleClick = React.useCallback((key: string, name: string) => {
    setToggle((state) => (state === key ? state.replace(name, '') : key));
  }, []);

  function recursiveMenu(menu: any) {
    return (
      <S.List>
        {menu.meta ? (
          <S.Link className={isActive(menu.url) ? S.active() : S.inactive()}>
            <S.Tag
              css={isActive(menu.url) ? { background: '$accents8' } : {}}
            />
            <Link href={menu.url}>{menu.title}</Link>
          </S.Link>
        ) : (
          <S.Category onClick={() => handleClick(menu.path, menu.name)}>
            {menu.title}{' '}
            {isOpened(menu) ? <MdExpandMore /> : <MdChevronRight />}
          </S.Category>
        )}
        {menu?.children?.map((item: any) => {
          if (item.meta) {
            return (
              <S.Item>
                <S.Link
                  className={isActive(item.url) ? S.active() : S.inactive()}
                >
                  <S.Tag
                    css={isActive(item.url) ? { background: '$accents8' } : {}}
                  />
                  <Link href={item.url}>{item.title}</Link>
                </S.Link>
              </S.Item>
            );
          }

          return recursiveMenu(item);
        })}
      </S.List>
    );
  }
  return (
    <S.SidebarWrapper hideIn={hide ? 'xs' : undefined}>
      <div className="wrapper">
        {resolveSidebar()?.children?.map?.((child) => recursiveMenu(child))}
      </div>
    </S.SidebarWrapper>
  );
}
