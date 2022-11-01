import { Checkbox, styled, Input as I } from '@nextui-org/react';

const StyledWrapper = styled('div', {
  overflowX: 'auto',
  overflowY: 'hidden',
});

const StyledTable = styled('table', {
  borderCollapse: 0,
  borderSpacing: 0,
  width: '100%',
});

const StyledTHead = styled('thead', {
  height: '2.875rem',
  '& th': {
    backgroundColor: '$accents0',
    color: '$accents7',
    fontSize: '0.8rem',
    fontWeight: '600',
    textAlign: 'left',
    padding: '0 $lg 0 0',
  },
  '& th:nth-child(1)': {
    paddingLeft: '1rem',
    borderRadius: '$lg 0 0 $lg',
  },
  '& th:last-child': {
    borderRadius: '0 $lg $lg 0',
  },
});

const StyledTCol = styled('td', {
  fontSize: '0.9rem',
  padding: '$sm',
});

export const Table: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <StyledWrapper>
      <StyledTable>{children}</StyledTable>
    </StyledWrapper>
  );
};

export const THead: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <StyledTHead>{children}</StyledTHead>;
};
export const TRow: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <tr>{children}</tr>;
};
export const TCol: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <StyledTCol>{children}</StyledTCol>;
};

export const Input = (props: any) => {
  if (props.type === 'checkbox') {
    return <Checkbox css={{ marginBottom: -3 }} {...props} />;
  }

  return <I {...props} />;
};
