import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

/**
 * build a function to evaluate in children prop.
 * validate if there are any element type react component.
 * if exist take them, and validate if there are any another component inside their props again.
 */

export const Playground = (props: any) => {
  console.log(props.children);
  return (
    <div>
      <LiveProvider
        code={props.code}
        scope={{ [props.children.type.name]: props.children.type }}
      >
        <LivePreview />
        <LiveEditor />
        <LiveError />
      </LiveProvider>
    </div>
  );
};
