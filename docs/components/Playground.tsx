import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const Playground = (props: any) => {
  console.log(props);
  return (
    <div>
      <LiveProvider code="<strong>Hello World!</strong>">
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </div>
  );
};
