import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSiteConfig } from '../../Provider';
import * as S from './styles';

export function Sidebar() {
  const { sidebar, language, versions, version } = useSiteConfig();
  const router = useRouter();
  const [toggle, setToggle] = React.useState(router.asPath);

  function resolveSidebar() {
    const contentWithVersion = sidebar.children.find(
      (resource) => resource.name === version
    );
    if (contentWithVersion) {
      const contentWithLanguage = contentWithVersion.children.find(
        (child) => child.name === language
      );
      if (contentWithLanguage) {
        return contentWithLanguage.children[0];
      }
      return contentWithVersion.children[0];
    }
    const contentWithLanguage = sidebar.children.find(
      (resource) => resource.name === language
    );
    if (contentWithLanguage) {
      return contentWithLanguage.children[0];
    }
    return sidebar;
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
      <S.Item>
        <S.Category onClick={() => handleClick(menu.path, menu.name)}>
          {menu.title}
        </S.Category>
        {isOpened(menu) &&
          menu.children &&
          menu.children.map((item: any) => {
            if (item.meta) {
              return (
                <S.Link
                  className={isActive(item.url) ? S.active() : S.inactive()}
                >
                  <S.Tag
                    css={isActive(item.url) ? { background: '$accents8' } : {}}
                  />
                  <Link href={item.url}>{item.title}</Link>
                </S.Link>
              );
            }

            return (
              <S.List className="icon is-small">{recursiveMenu(item)}</S.List>
            );
          })}
      </S.Item>
    );
  }
  return (
    <S.SidebarWrapper>
      <div className="wrapper">
        <S.List>{recursiveMenu(resolveSidebar())}</S.List>
      </div>
    </S.SidebarWrapper>
  );
}
