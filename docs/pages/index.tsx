import { Button, Grid, Text } from '@nextui-org/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslate } from 'packages/engrafia-ui/src/useTranslation';

export default function Index() {
  const router = useRouter();
  const t = useTranslate();
  return (
    <>
      <Head>
        <title>Engrafia | Docs generator</title>
        <meta
          name="description"
          content="The most easiest way to write docs for your project."
        />
      </Head>
      <Grid.Container
        justify="center"
        direction="column"
        alignItems="center"
        css={{ p: '$20' }}
      >
        <Text
          h1
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight="bold"
          size="5rem"
        >
          Engrafia
        </Text>
        <Text
          h1
          css={{
            textGradient: '45deg, $purple600 -20%, $pink600 100%',
          }}
          weight="bold"
        >
          Beta
        </Text>

        <Text>{t('description')}</Text>
      </Grid.Container>

      <Grid.Container gap={2} justify="center">
        <Grid>
          <Button onClick={() => router.push('/docs/0.1.0/pt_BR/quick-start')}>
            {t('get.start')}
          </Button>
        </Grid>
        <Grid>
          <Button
            bordered
            onClick={() => router.push('/docs/0.1.0/pt_BR/quick-start')}
          >
            {t('read.docs')}
          </Button>
        </Grid>
      </Grid.Container>
      <Grid.Container
        justify="center"
        direction="column"
        alignItems="center"
        css={{ marginTop: '3rem' }}
      >
        <Text size="$2xl" color="$accents8">
          {t('sentence.brand')}
        </Text>
      </Grid.Container>
      <Grid.Container gap={2} justify="center">
        <Grid css={{ width: '20rem', height: '15rem', m: '3rem' }}>
          <Text size="2rem">{t('performant')}</Text>
          <Text color="$accents8">{t('performant.sentence')}</Text>
        </Grid>
        <Grid css={{ width: '20rem', height: '15rem', m: '3rem' }}>
          <Text size="2rem">{t('next.power')}</Text>
          <Text color="$accents8">{t('easy.to.use.sentence')}</Text>
        </Grid>
        <Grid css={{ width: '20rem', height: '15rem', m: '3rem' }}>
          <Text size="2rem">{t('easy.to.use')}</Text>
          <Text color="$accents8">{t('easy.to.use.sentence')}</Text>
        </Grid>
      </Grid.Container>
    </>
  );
}
