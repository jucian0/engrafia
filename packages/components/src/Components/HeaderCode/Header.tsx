import { Button, Grid } from '@nextui-org/react';
import React from 'react';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import useClipboard from 'react-use-clipboard';

type Props = {
  text: string;
  language?: string;
};
export function HeaderCode({ text, language }: Props) {
  const [isCopied, setCopied] = useClipboard(text as '', {
    successDuration: 1000,
  });

  return (
    <Grid
      css={{
        position: 'absolute',
        right: 20,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Button
        icon={isCopied ? <MdCheck /> : <MdContentCopy />}
        light
        auto
        onClick={() => setCopied()}
      />
      {language && (
        <Grid
          css={{
            width: '2.4rem',
            height: '2.4rem',
            display: 'flex',
            color: '$text',
            jc: 'center',
            ai: 'center',
          }}
        >
          {language}
        </Grid>
      )}
    </Grid>
  );
}
