import { Button, Grid } from '@nextui-org/react';
import React from 'react';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import useClipboard from 'react-use-clipboard';

type Props = {
  text: string;
  language: string;
};
export function HeaderCode({ text, language }: Props) {
  const [isCopied, setCopied] = useClipboard(text as '', {
    successDuration: 1000,
  });

  return (
    <Grid
      css={{
        position: 'absolute',
        right: 0,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Button
        icon={isCopied ? <MdCheck /> : <MdContentCopy />}
        auto
        light
        rounded
        onClick={() => setCopied()}
      />
      <Button auto light rounded>
        {language}
      </Button>
    </Grid>
  );
}
