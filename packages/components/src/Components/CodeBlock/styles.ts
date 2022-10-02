import { styled } from '@nextui-org/react';

export const Container = styled('div', {
  margin: '1rem 0',
  width: '100%',
  '*': {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: '0.875rem',
    whiteSpace: 'pre-wrap',
  },
  pre: {
    padding: '$lg',
    boxShadow: '$2',
    width: '100%',
  },

  '& .language': {
    fontFamily: '"Roboto", sans-serif !important',
    color: 'White',
    backgroundColor: '$primaryPure',
    border: '0.063rem solid',
    borderColor: '$primaryPure',
    borderRadius: '0 0 0.125rem 0.125rem',
    marginLeft: '0.313rem',
    padding: '0.25rem 0.125rem',
    display: 'inline',
  },

  '& button': {
    backgroundColor: '$primaryPure',
    border: '0.063rem solid',
    borderColor: '$primaryPure',
    cursor: 'pointer',
    padding: '0.313rem',
    borderRadius: '0 0 0.125rem',

    '&:hover': {
      boxShadow: '$2',
    },
  },

  '& .header': {
    zIndex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    '& .language': {
      color: '#ffffff',
      borderRadius: '0 0 0.125rem 0.125rem',
      marginRight: '0.313rem',
      width: 'max-content',
      padding: '0.25rem 0.125rem',
      display: 'inline',
      background: '$primaryPure',
      border: '0.063rem solid',
      borderColor: '$primaryPure',
    },
    '& button': {
      cursor: 'pointer',
      padding: '0 0.313rem',
      borderRadius: '0 0 0.125rem 0.125rem',
      marginRight: '0.625rem',
      background: '$primaryPure',
      border: '0.063rem solid',
      borderColor: '$primaryPure',
      '&:hover': {},
      '& svg': { marginTop: '0.3125rem' },
    },
  },
});
