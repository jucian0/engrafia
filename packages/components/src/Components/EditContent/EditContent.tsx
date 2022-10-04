import { useRouter } from 'next/router';
import { MdEdit } from 'react-icons/md';

import { useSiteConfig } from '../../Provider';
import { useTranslate } from '../../useTranslation';
import * as S from './styles';
import { createEditUrl } from './utils';

export function EditContent() {
  const { config, sidebar } = useSiteConfig();
  const router = useRouter();

  const href = createEditUrl({
    repository: config.repository?.url,
    branch: config.repository?.branch,
    filePath: router.asPath,
  });
  const t = useTranslate();
  // build a recursive function to get the correct file path and extension from sidebar tree
  console.log(sidebar, router.route);
  return (
    <S.Wrapper>
      <a href={href} target="_blank" rel="noreferrer">
        <MdEdit size="1.2rem" />
        &nbsp;{t('edit.content')}
      </a>
    </S.Wrapper>
  );
}
