import { useRouter } from 'next/router';
import React from 'react';
import { EngrafiaContextType, EngrafiaContext } from './EngrafiaContext';
import { getFolderContent, getFolderName } from './get-folders';
import { getI18nConfig } from './get-i18n';
import { getSidebarTree, sidebarFallback } from './get-sidebar';
import { getThemeConfigModule, Meta } from './get-theme-config';

const TEST_VERSION_FOLDER =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

export const useEngrafiaConfig = (): EngrafiaContextType => {
  const data = React.useContext(EngrafiaContext);
  return data;
};

function configReducer(
  currentState: EngrafiaContextType,
  nextState: Partial<EngrafiaContextType>
): EngrafiaContextType {
  return {
    ...currentState,
    ...nextState,
  };
}

const INITIAL_STATE: EngrafiaContextType = {
  meta: {} as Meta,
  tableOfContent: { depth: 1, children: [] },
  version: undefined,
  sidebar: sidebarFallback,
  translations: {},
  themeConfig: {},
};

async function resolveEngrafiaDataConfig(locale?: string) {
  return Promise.allSettled([
    getThemeConfigModule(),
    getSidebarTree(),
    getI18nConfig(locale),
  ]);
}

export function EngrafiaProvider({ children }: React.PropsWithChildren<any>) {
  const { locale, route } = useRouter();
  const [config, setConfig] = React.useReducer(configReducer, INITIAL_STATE);

  async function resolveAll() {
    const data: any = await resolveEngrafiaDataConfig(locale);
    const themeConfig = data[0].value;
    const pseudoSidebarData = data[1].value;
    const translations = data[2].value ?? {};

    const versions = getFolderName(pseudoSidebarData, TEST_VERSION_FOLDER);
    const version = versions[versions.length - 1];
    const paths = [themeConfig.rootDocs, version].filter((p) => p) as string[];
    const sidebar = getFolderContent(pseudoSidebarData, paths);

    setConfig({
      themeConfig,
      sidebar,
      translations,
      version,
      versions,
    });
  }

  React.useEffect(() => {
    resolveAll();
  }, [locale, route]);

  React.useEffect(() => {
    if (children?.props?.children?.props) {
      setConfig({
        meta: children.props.children.props.data,
        tableOfContent: children.props.children.props.tableOfContents,
      });
    }
  }, [children?.props?.children?.props]);

  return (
    <EngrafiaContext.Provider value={config}>
      {children}
    </EngrafiaContext.Provider>
  );
}
