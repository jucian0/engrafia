import { useRouter } from 'next/router';
import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { getI18nConfig } from '../../get-i18n';
import { useSiteConfig } from '../../Provider';
import * as S from './styles';

const i18nConfig = getI18nConfig();

export function LanguageSelector() {
  const { setSiteConfig, language } = useSiteConfig();
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
      <MdLanguage />
      <select value={current} onChange={handleChangeLanguage}>
        {i18nConfig?.locales?.map((language) => (
          <option value={language}>{language}</option>
        ))}
      </select>
    </S.Wrapper>
  );
}
