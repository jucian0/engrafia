import Highlight, { defaultProps } from 'prism-react-renderer';
import light from 'prism-react-renderer/themes/nightOwlLight';
import dark from 'prism-react-renderer/themes/dracula';
import { Button, useTheme } from '@nextui-org/react';
import * as S from './styles';
import { HeaderCode } from '../HeaderCode/Header';

type Props = {
  className?: string;
  children: string;
};

export function Code({ children, className }: React.PropsWithChildren<Props>) {
  const language = className?.replace(/language-/, '');
  const theme = useTheme();

  if (!language) {
    return <code>{children}</code>;
  }

  return (
    <Highlight
      {...defaultProps}
      theme={theme.isDark ? dark : light}
      code={children.trim()}
      language={language as any}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <S.Container>
          <HeaderCode text={children.trim()} language={language} />
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </S.Container>
      )}
    </Highlight>
  );
}
