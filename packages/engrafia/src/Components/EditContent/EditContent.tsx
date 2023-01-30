import { useRouter } from 'next/router';
import React from 'react';

import { MdEdit } from 'react-icons/md';
import { useEngrafiaConfig } from '../../EngrafiaProvider';
import { useTranslation } from '../../useTranslation';
import * as S from './styles';
import { createEditUrl, getFilePath } from './utils';

export function EditContent() {
  const { themeConfig, sidebar } = useEngrafiaConfig();
  const router = useRouter();
  const relativePath = getFilePath(sidebar, router.route);
  const { locale } = useRouter();

  const href = createEditUrl({
    repository: themeConfig.repository?.url,
    branch: themeConfig.repository?.branch,
    filePath: relativePath,
  });
  const t = useTranslation();

  return (
    <S.Wrapper>
      <a href={href} target="_blank" rel="noreferrer">
        <MdEdit size="1.2rem" />
        &nbsp;{locale ? t('edit.content') : 'Edit this content'}
      </a>
    </S.Wrapper>
  );
}
