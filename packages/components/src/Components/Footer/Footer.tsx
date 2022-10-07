import { Grid } from '@nextui-org/react';
import { getThemeConfig } from '../../get-theme-config';

const { default: themeConfig } = getThemeConfig();

export function Footer() {
  return (
    <Grid.Container>
      <>{themeConfig.footer?.logo}</>
      {themeConfig.footer?.text}
    </Grid.Container>
  );
}
