import { useRouter } from 'next/router';
import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { useSiteConfig } from '../../Provider';
import * as S from './styles';

export function LanguageSelector() {
  const { config, setSiteConfig, language, languages } = useSiteConfig();
  const { replace, asPath } = useRouter();

  const current = language;

  function handleChangeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    replace(asPath.replace(language, value));
    localStorage.setItem('language', value);
    setSiteConfig?.((state) => ({
      ...state,
      language: value,
    }));
  }

  return (
    <S.Wrapper>
      {' '}
      <MdLanguage />
      <select value={current} onChange={handleChangeLanguage}>
        {languages.map((language) => (
          <option value={language}>{language}</option>
        ))}
      </select>
    </S.Wrapper>
  );
}
