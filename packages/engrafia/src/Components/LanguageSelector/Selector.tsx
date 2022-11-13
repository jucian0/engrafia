import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdLanguage } from 'react-icons/md';
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemText,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from '../Select/Select';
import * as S from './styles';

export function LanguageSelector() {
  const { pathname, query, asPath, locales, locale, ...router } = useRouter();

  function handleChangeLanguage(e: string) {
    const nextPathName = pathname.replace(locale as '', e);
    const nextAsPath = asPath.replace(locale as '', e);
    router.push({ pathname: nextPathName, query }, nextAsPath, {
      locale: e,
    });
  }

  return (
    <S.Wrapper>
      <Select value={locale} onValueChange={handleChangeLanguage}>
        <SelectTrigger aria-label="Food">
          <SelectIcon>
            <MdLanguage size={16} />
          </SelectIcon>
          <SelectValue placeholder="Select a fruit…" />
        </SelectTrigger>

        <SelectContent>
          <SelectViewport>
            {locales?.map((language) => (
              <SelectItem value={language} key={language}>
                <SelectItemText>{language}</SelectItemText>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </Select>
    </S.Wrapper>
  );
}
