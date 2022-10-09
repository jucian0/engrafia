import { useRouter } from 'next/router';
import React from 'react';
import { VscVersions } from 'react-icons/vsc';
import { useSiteConfig } from '../../Provider';
import * as S from './styles';

export function VersionSelector() {
  const { setSiteConfig, version, versions } = useSiteConfig();
  const { replace, asPath } = useRouter();

  function handleChangeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    replace(asPath.replace(version ?? '', value));
    localStorage.setItem('version', value);
    setSiteConfig?.((state) => ({
      ...state,
      version: value,
    }));
  }

  return (
    <S.Wrapper>
      {' '}
      <VscVersions />
      <select value={version} onChange={handleChangeLanguage}>
        {versions?.map((version) => (
          <option value={version}>{version}</option>
        ))}
      </select>
    </S.Wrapper>
  );
}
