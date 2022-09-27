import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import light from 'prism-react-renderer/themes/vsLight';
import dark from 'prism-react-renderer/themes/nightOwl';
import {  Grid, useTheme } from '@nextui-org/react';


 
const Box = ({css,...props}:any)=> <Grid.Container {...props} css={{boxShadow: '$xs', ...css }}/>


export const Playground = (props: any) => {
  const theme = useTheme()
  return (
    <Box md={12} css={{  borderRadius:'$xs',border:'1px solid $gray100'}}>
      <LiveProvider
        code={props.code}
        scope={props.scope}
        theme={theme.isDark ? dark: light}
        frameBorder={2}
      >
        <Box as={LivePreview}  css={{ minHeight:'80px', p: '$5',borderBottom:'1px solid $gray100', alignItems:'center'}}/>
        <LiveEditor style={{borderEndEndRadius:7, borderEndStartRadius:7}} />
        <Box as={LiveError}  css={{  background: '$errorDark',minHeight:'100px', p: '$5',borderRadius:'$xs',borderStartEndRadius:0, borderStartStartRadius:0, color:'$white'}}/>
      </LiveProvider>
    </Box>
  );
};
