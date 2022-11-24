import { Badge, Button, Card, Grid, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { CgPerformance } from 'react-icons/cg';
import { IoRocketOutline } from 'react-icons/io5';
import { BsHandThumbsUp } from 'react-icons/bs';
import { Code, Link, useTranslation } from 'engrafia';

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

const code = `---
title: 'Quick start'
description: 'This section will guide you through principals' ideas and how to start to use them.'
position: 0
---`;

const jsCode = `export const getStaticProps = async () => {
  return {
    props: {
      data: {
        title: 'Docs generator',
        description: 'The easiest way to write docs.',
      },
    },
  };
};`;

const pyCode = `# Store input numbers
num1 = input('Enter first number: ')
num2 = input('Enter second number: ')

# Add two numbers
sum = float(num1) + float(num2)

# Display the sum
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))
## Python`;

export default function Index() {
  const router = useRouter();
  const t = useTranslation();
  return (
    <Grid.Container justify="center">
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
        css={{ maxW: '90rem' }}
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

        <Text as="h2" css={{ zIndex: '$1' }}>
          {t('description')}
        </Text>
      </Grid.Container>

      <Grid.Container
        gap={2}
        justify="center"
        css={{ zIndex: 1, maxW: '90px' }}
      >
        <Grid>
          <Button
            css={{ fontSize: '$lg' }}
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
        css={{
          marginTop: '3rem',
          marginBottom: '3rem',
          zIndex: 2,
          maxW: '90rem',
        }}
      >
        <Text size="$2xl" color="$accents8" css={{ zIndex: '$1' }}>
          {t('sentence.brand')}
        </Text>
      </Grid.Container>

      <Grid.Container
        gap={2}
        justify="center"
        css={{ zIndex: 1, maxW: '90rem' }}
      >
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

      <Grid css={{ borderTop: '1px solid $border', w: '80rem', my: '5rem' }} />

      <Grid.Container
        gap={2}
        justify="center"
        css={{ zIndex: 1, mb: 100, maxW: '80rem' }}
      >
        <Grid css={{ w: '50%' }} justify="flex-end">
          <Text h1 css={{ lineHeight: '$xs' }}>
            {'Metadata, '}
            <Text color="primary" span css={{ lineHeight: '$xs' }}>
              SEO
            </Text>
            {', sidebar organization'}
          </Text>
          <Text>
            {
              'Organize your content, improve SEO, and search engine results, and organize your content in the sidebar'
            }
            <Badge isSquared color="secondary" variant="flat">
              <Link href="/docs/0.1.0/features/seo">Read more</Link>
            </Badge>
          </Text>
        </Grid>
        <Grid css={{ w: '50%' }}>
          <Code className="markdown" boxShadow="$md">
            {code}
          </Code>
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} css={{ zIndex: 1, maxW: '80rem', mb: '8rem' }}>
        <Grid css={{ w: '100%' }} justify="flex-end">
          <Text
            h1
            css={{
              lineHeight: '$xs',
              textGradient: '45deg, $blue600 -20%, $pink600 50%',
            }}
          >
            Code highlight{' '}
          </Text>
          <Text>
            {
              'Powered by PrismJs, write, and show beautiful code highlight, and organize it easily'
            }
            <Badge isSquared color="secondary" variant="flat">
              <Link href="/docs/0.1.0/features/code-highlight">Read more</Link>
            </Badge>
          </Text>
        </Grid>
        <Grid css={{ w: '50%' }}>
          <Code className="javascript" boxShadow="$md">
            {jsCode}
          </Code>
        </Grid>
        <Grid css={{ w: '50%' }}>
          <Code className="python" boxShadow="$md">
            {pyCode}
          </Code>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
}
