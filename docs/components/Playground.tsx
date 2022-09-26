import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import light from 'prism-react-renderer/themes/vsLight';
import dark from 'prism-react-renderer/themes/dracula';
import { Button, Grid, useTheme } from '@nextui-org/react';


 
const Box = ({css,...props}:any)=> <Grid.Container {...props} css={{boxShadow: '$sm', ...css }}/>

function evaluateScope(children:any){
  const scope = {}
  function evaluate(children:any){
    if(children.type.name){
     return scope[children.type.name] = children.type
    }else if(children.props.children){
      if(Array.isArray(children.props.children)){
        children.props.children.forEach(child=>{
          evaluate(child)
        })
      }else{
        evaluate(children.props.children)
      }
    }
    return scope
  }
  return evaluate(children)
}

export const Playground = (props: any) => {
  const scopes = evaluateScope(props.children)
  const theme = useTheme()
  return (
    <Box md={12} css={{ boxShadow:'$sm', borderRadius:'$xs',border:'1px solid', borderColor:"$gray50",}}>
      <LiveProvider
        code={props.code.trim()}
        scope={scopes}
        theme={theme.isDark ? dark: light}
        frameBorder={2}
      >
        <Box as={LivePreview}  css={{ minHeight:'100px', p: '$5',borderBottom:'1px solid', borderColor:"$gray50"}}/>
        <LiveEditor style={{borderRadius:8}} />
        <Box as={LiveError}  css={{  background: '$errorDark',minHeight:'100px', p: '$5',borderRadius:'$xs',borderStartEndRadius:0, borderStartStartRadius:0}}/>
      </LiveProvider>
    </Box>
  );
};
