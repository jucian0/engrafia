import { Button, Card, Grid, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { CgPerformance } from 'react-icons/cg';
import { IoRocketOutline } from 'react-icons/io5';
import { BsHandThumbsUp } from 'react-icons/bs';
import { useTranslation } from 'engrafia';

export const getStaticProps = async () => {
  return {
    props: {
      data: {
        title: 'Docs generator',
        description: 'The easiest way to write docs for your project.',
        tags: 'docs, documentation, nextjs',
      },
    },
  };
};

export default function Index() {
  const router = useRouter();
  const t = useTranslation();
  return (
    <>
      <img
        src="/imgs/background.svg"
        style={{
          position: 'absolute',
          maxWidth: '50%',
          height: 'auto',
          right: 0,
        }}
      />
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

        <Text>{t('description')}</Text>
      </Grid.Container>

      <Grid.Container gap={2} justify="center" css={{ zIndex: 1 }}>
        <Grid>
          <Button
            onClick={() =>
              router.push(
                `/docs/0.1.0/introduction/quick-start.${router.locale}`
              )
            }
          >
            {t('get.start')}
          </Button>
        </Grid>
      </Grid.Container>
      <Grid.Container
        justify="center"
        direction="column"
        alignItems="center"
        css={{ marginTop: '3rem', marginBottom: '3rem', zIndex: 2 }}
      >
        <Text size="$2xl" color="$accents8">
          {t('sentence.brand')}
        </Text>
      </Grid.Container>

      <Grid.Container gap={2} justify="center" css={{ zIndex: 1, mb: 200 }}>
        <Grid>
          <Card
            css={{
              p: '$6',
              mw: '400px',
              h: 250,
              shadow: '$sm',

              backdropFilter: 'saturate(180%) blur(14px)',
              background: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <Card.Header>
              <CgPerformance size={40} />
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    {t('performant')}
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
              <Text>{t('performant.sentence')} </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid>
          <Card
            css={{
              p: '$6',
              mw: '400px',
              h: 250,
              shadow: '$sm',

              backdropFilter: 'saturate(180%) blur(14px)',
              background: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <Card.Header>
              <IoRocketOutline size={40} />
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    {t('next.power')}
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
              <Text>{t('easy.to.use.sentence')} </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid>
          <Card
            css={{
              p: '$6',
              mw: '400px',
              h: 250,
              shadow: '$sm',
              backdropFilter: 'saturate(180%) blur(14px)',
              background: 'rgba(255, 255, 255, 0.05)',
            }}
          >
            <Card.Header>
              <BsHandThumbsUp size={40} />
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text h4 css={{ lineHeight: '$xs' }}>
                    {t('easy.to.use')}
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$2' }}>
              <Text>{t('easy.to.use.sentence')} </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
}
