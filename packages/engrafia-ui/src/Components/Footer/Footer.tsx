import { Grid } from '@nextui-org/react';
import { useEngrafiaConfig } from '../../EngrafiaProvider';

export function Footer() {
  const { themeConfig } = useEngrafiaConfig();
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
        {themeConfig.footer?.logo}
        {themeConfig.footer?.textLogo}
        {themeConfig.footer?.text}
      </Grid>
    </Grid.Container>
  );
}
