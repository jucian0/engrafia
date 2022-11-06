import { useRouter } from 'next/router';
import React from 'react';
import { EngrafiaContextType, EngrafiaContext } from './EngrafiaContext';
import { getFolderName } from './get-folders';
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
  version: 'latest',
  sidebar: sidebarFallback,
  translations: {},
  themeConfig: {},
};

export function EngrafiaProvider({ children }: React.PropsWithChildren<any>) {
  const { locale, defaultLocale } = useRouter();
  const [config, setConfig] = React.useReducer(configReducer, INITIAL_STATE);

  const versions = React.useMemo(
    () => getFolderName(config.sidebar, TEST_VERSION_FOLDER),
    [config.sidebar]
  );

  React.useEffect(() => {
    setConfig({
      versions: versions,
      version: versions[versions.length - 1],
    });
  }, [versions]);

  async function getThemeConfig() {
    getThemeConfigModule()
      .then((resp) => setConfig({ themeConfig: resp }))
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      getThemeConfig();
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

  async function getSidebar() {
    getSidebarTree()
      .then((resp) => setConfig({ sidebar: resp }))
      .catch((err) => console.error(err));
  }

  React.useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      getSidebar();
    }

    return () => {
      isSubscribed = false;
    };
  }, [locale, config.version]);

  async function getI18n() {
    const language = locale ?? defaultLocale;
    if (language) {
      getI18nConfig(language)
        .then((resp) => setConfig({ translations: resp }))
        .catch((err) => console.error(err));
    }
  }

  React.useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      getI18n();
    }

    return () => {
      isSubscribed = false;
    };
  }, [locale]);

  React.useEffect(() => {
    if (children?.props?.children?.props) {
      console.log(children?.props?.children);
      setConfig({
        meta: children.props.children.props.data,
        tableOfContent: children.props.children.props.tableOfContents,
      });
    }
  }, [children?.props]);

  return (
    <EngrafiaContext.Provider value={config}>
      {children}
    </EngrafiaContext.Provider>
  );
}
