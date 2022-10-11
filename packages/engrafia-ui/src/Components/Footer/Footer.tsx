import { Grid } from '@nextui-org/react';
import { getThemeConfig } from '../../get-theme-config';

const { default: themeConfig } = getThemeConfig();

export function Footer() {
  return (
    <Grid.Container
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: '$lg',
      }}
    >
      <Grid
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <>{themeConfig.footer?.logo}</>
        {themeConfig.footer?.text}
      </Grid>
    </Grid.Container>
  );
}
