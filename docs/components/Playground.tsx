import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { RiSunFill } from 'react-icons/ri';

export const Playground = (props: any) => {
  console.log(props.scope);
  return (
    <div>
      <LiveProvider code={props.code} scope={props.scope}>
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </div>
  );
};
