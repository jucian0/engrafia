import { Grid } from '@nextui-org/react';
import { useEngrafiaConfig } from '../../EngrafiaProvider';
import React from 'react';

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
        direction="column"
      >
        <img src={themeConfig.footer?.logo} alt="" width={160} height={40} />
        {themeConfig.footer?.text}
      </Grid>
    </Grid.Container>
  );
}
