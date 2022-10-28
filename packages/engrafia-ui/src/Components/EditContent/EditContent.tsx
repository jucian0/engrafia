import { useRouter } from 'next/router';
import { MdEdit } from 'react-icons/md';
import { getSidebarTree } from '../../get-sidebar';
import { getThemeConfig } from '../../get-theme-config';
import { useTranslation } from '../../useTranslation';
import * as S from './styles';
import { createEditUrl, getFilePath } from './utils';

const { default: themeConfig } = getThemeConfig();
const sidebar = getSidebarTree();
export function EditContent() {
  const router = useRouter();
  const relativePath = getFilePath(sidebar, router.route);

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
        &nbsp;{t('edit.content')}
      </a>
    </S.Wrapper>
  );
}
