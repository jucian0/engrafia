import { useRouter } from 'next/router';
import { VscVersions } from 'react-icons/vsc';
import { useEngrafiaConfig } from '../../EngrafiaProvider';
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

export function VersionSelector() {
  const { setSiteConfig, version, versions } = useEngrafiaConfig();
  const { replace, asPath } = useRouter();

  function handleChangeLanguage(e: string) {
    replace(asPath.replace(version ?? '', e));
    setSiteConfig?.((state) => ({
      ...state,
      version: e,
    }));
  }

  return (
    <S.Wrapper>
      <Select value={version} onValueChange={handleChangeLanguage}>
        <SelectTrigger aria-label="version">
          <SelectIcon>
            <VscVersions size={18} />
          </SelectIcon>
          <SelectValue placeholder="Select a version" />
        </SelectTrigger>

        <SelectContent>
          <SelectViewport>
            {versions?.map((version) => (
              <SelectItem value={version} key={version}>
                <SelectItemText>{version}</SelectItemText>
              </SelectItem>
            ))}
          </SelectViewport>
        </SelectContent>
      </Select>
    </S.Wrapper>
  );
}
