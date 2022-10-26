import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdLanguage } from 'react-icons/md';
import { useSiteConfig } from '../../Provider';
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

  function handleChangeLanguage(locale: string) {
    router.push({ pathname, query }, asPath, { locale });
  }

  return (
    <S.Wrapper>
      <Select value={locale} onValueChange={handleChangeLanguage}>
        <SelectTrigger aria-label="Food">
          <SelectValue placeholder="Select a fruit…" />
          <SelectIcon>
            <MdLanguage />
          </SelectIcon>
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
