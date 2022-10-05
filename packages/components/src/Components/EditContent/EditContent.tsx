import { useRouter } from 'next/router';
import { MdEdit } from 'react-icons/md';

import { useSiteConfig } from '../../Provider';
import { useTranslate } from '../../useTranslation';
import * as S from './styles';
import { createEditUrl, getFilePath } from './utils';

export function EditContent() {
  const { config, sidebar } = useSiteConfig();
  const router = useRouter();
  const relativePath = getFilePath(sidebar, router.route);

  const href = createEditUrl({
    repository: config.repository?.url,
    branch: config.repository?.branch,
    filePath: relativePath,
  });
  const t = useTranslate();
  console.log(relativePath);
  return (
    <S.Wrapper>
      <a href={href} target="_blank" rel="noreferrer">
        <MdEdit size="1.2rem" />
        &nbsp;{t('edit.content')}
      </a>
    </S.Wrapper>
  );
}
