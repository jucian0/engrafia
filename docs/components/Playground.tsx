import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import dracula from 'prism-react-renderer/themes/vsLight';

import * as S from './playground-styles'

/**
 * make a function to evaluate in children prop.
 * validate if there are any element type react component.
 * if exist take them, and validate if there are any another component inside their props again.
 */
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
  return (
    <S.Container>
      <LiveProvider
        code={props.code}
        scope={scopes}
        theme={dracula}
        frameBorder={2}
      >
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </S.Container>
  );
};
