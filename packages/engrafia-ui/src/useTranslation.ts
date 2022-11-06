import { useRouter } from 'next/router';
import { useEngrafiaConfig } from './EngrafiaProvider';

export function useTranslation() {
  const { locale } = useRouter();
  const { translations } = useEngrafiaConfig();

  return (key: string) => {
    if (!locale) {
      return key;
    }
    return translations[key];
  };
}
