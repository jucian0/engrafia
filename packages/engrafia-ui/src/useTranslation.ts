import { useEngrafiaConfig } from './EngrafiaProvider';

export function useTranslation() {
  const { translations } = useEngrafiaConfig();

  return (key: string) => {
    return translations[key] ?? key;
  };
}
