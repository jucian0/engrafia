import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import light from 'prism-react-renderer/themes/nightOwlLight';
import dark from 'prism-react-renderer/themes/dracula';
import { Grid, useTheme } from '@nextui-org/react';
import { Resizable } from 're-resizable';
import React from 'react';
import { getResizableProps } from './resizableProps';

const Box = ({ css, ...props }: any) => (
  <Grid.Container {...props} css={{ boxShadow: '$xs', ...css }} />
);

export const Playground = (props: any) => {
  const theme = useTheme();
  const [width, setWidth] = React.useState('100%');

  const resizableProps = getResizableProps(width, setWidth);

  return (
    <Resizable
      {...resizableProps}
      handleComponent={{
        right: (
          <Grid
            css={{
              width: '1.25rem',
              height: '100%',
              backgroundColor: '$gray200',
              border: '0.313rem solid $gray200',
              borderRadius: '0 $md $md 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '-1.25rem',
            }}
          >
            <Grid
              css={{
                width: '0.5rem',
                height: '30%',
                borderInlineEnd: '0.125rem solid $accents4',
                borderInlineStart: '0.125rem solid $accents4',
              }}
            />
          </Grid>
        ),
      }}
    >
      <Box
        md={12}
        css={{
          borderRadius: '$md 0 0 $md',
          border: '0.063rem solid $gray200',
          width: 'calc( 100% - 1.25rem )',
        }}
      >
        <LiveProvider
          code={props.code}
          scope={props.scope}
          theme={theme.isDark ? dark : light}
          frameBorder={2}
        >
          <Box
            as={LivePreview}
            css={{
              minHeight: '5rem',
              p: '$5',
              borderBottom: '0.063rem solid $gray200',
              alignItems: 'center',
            }}
          />
          <LiveEditor
            style={{ borderEndEndRadius: 7, borderEndStartRadius: 7 }}
          />
          <Box
            as={LiveError}
            css={{
              background: '$errorDark',
              minHeight: '6.125rem',
              p: '$5',
              borderRadius: '$xs',
              borderStartEndRadius: 0,
              borderStartStartRadius: 0,
              color: '$white',
            }}
          />
        </LiveProvider>
      </Box>
    </Resizable>
  );
};
