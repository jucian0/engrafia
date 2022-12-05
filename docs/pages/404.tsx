import { useTranslation } from 'engrafia';
import { Grid, Text } from '@nextui-org/react';
import Head from 'next/head';
import Link from 'next/link';

export const getServerSideProps = async () => {
  return {
    props: {
      meta: {
        title: '404',
        description:
          'We could not find your content, try to navigate to home page.',
        tags: 'docs, documentation, nextjs',
      },
    },
  };
};

export default function NotFound() {
  const t = useTranslation();
  return (
    <>
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
          404, Page not found!
        </Text>

        <Text as="h2">
          {'Sorry, we could not find your target content, try to navigate to '}
          <Link href="/">home page.</Link>
        </Text>
      </Grid.Container>
    </>
  );
}
