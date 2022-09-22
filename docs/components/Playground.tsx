import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const Playground = (props: any) => {
  console.log(props);
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
