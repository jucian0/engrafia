import { Button, Grid, Text } from '@nextui-org/react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getI18nConfig } from 'packages/engrafia-ui/src/get-i18n';
import { useTranslate } from 'packages/engrafia-ui/src/useTranslation';

const { translations } = getI18nConfig();

export default function NotFound() {
  const router = useRouter();
  const contents = translations;
  const t = useTranslate();
  return (
    <>
      <Head>
        <title>Engrafia | 404</title>
        <meta
          name="description"
          content="The most easiest way to write docs for your project."
        />
      </Head>
      <Grid.Container
        justify="center"
        direction="column"
        alignItems="center"
        css={{ p: '$20', h: 'calc(100vh - 180px )' }}
      >
        <Text
          h1
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight="bold"
          size="5rem"
        >
          404
        </Text>

        <Text>
          Page not found!{'  '}
          <Link href="/">Home page</Link>
        </Text>
      </Grid.Container>
    </>
  );
}
