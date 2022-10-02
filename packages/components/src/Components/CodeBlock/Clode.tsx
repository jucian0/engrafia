import Highlight, { defaultProps } from 'prism-react-renderer';
import light from 'prism-react-renderer/themes/nightOwlLight';
import dark from 'prism-react-renderer/themes/dracula';
import { useTheme } from '@nextui-org/react';

type Props = {
  className?: string;
  children: string;
};

export function Code({ children, className }: React.PropsWithChildren<Props>) {
  const language = className?.replace(/language-/, '');
  const theme = useTheme();

  console.log(language, '<<<<<<');

  if (!language) {
    return <code>{children}</code>;
  }

  return (
    <Highlight
      {...defaultProps}
      theme={theme.isDark ? dark : light}
      code={children}
      language={language as any}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}
