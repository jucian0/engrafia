import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import light from 'prism-react-renderer/themes/nightOwlLight';
import dark from 'prism-react-renderer/themes/dracula';
import { useTheme } from '@nextui-org/react';
import * as S from './styles';
import { HeaderCode } from '../HeaderCode/Header';
import React from 'react';

type Props = {
  className?: string;
  children: string;
  boxShadow?: string;
};

export function Code({
  children,
  className,
  boxShadow,
}: React.PropsWithChildren<Props>) {
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
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <S.Container
          css={{
            boxShadow: boxShadow ?? 'none',
            borderRadius: '$lg',
            w: '100%',
          }}
        >
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
