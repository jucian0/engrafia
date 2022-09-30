import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import light from 'prism-react-renderer/themes/nightOwlLight';
import dark from 'prism-react-renderer/themes/dracula';
import { Grid, useTheme } from '@nextui-org/react';
import { Resizable } from 're-resizable';
import React from 'react';

const getResizableProps = (
  width: string,
  setWidth: (width: string) => void
) => ({
  minWidth: 260,
  maxWidth: '100%',
  size: {
    width: width,
    height: 'auto',
  },
  style: {
    margin: 0,
    marginRight: 'auto',
    height: 'auto',
  },
  enable: {
    top: false,
    right: true,
    bottom: false,
    left: false,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  },
  onResizeStop: (_: any, __: any, ref: any) => {
    setWidth(ref.style.width);
  },
});

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
              width: 20,
              height: '100%',
              backgroundColor: '$gray200',
              border: '5px solid $gray200',
              borderRadius: '0 8px 8px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Grid
              css={{
                width: 8,
                height: '30%',
                borderInlineEnd: '2px solid $accents4',
                borderInlineStart: '2px solid $accents4',
              }}
            />
          </Grid>
        ),
      }}
    >
      <Box
        md={12}
        css={{
          borderRadius: '$xs 0 0 $xs',
          border: '1px solid $gray200',
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
              minHeight: '80px',
              p: '$5',
              borderBottom: '1px solid $gray200',
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
              minHeight: '100px',
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
