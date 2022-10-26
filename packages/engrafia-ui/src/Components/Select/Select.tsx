import React from 'react';
import { styled } from '@nextui-org/react';
import * as SelectPrimitive from '@radix-ui/react-select';

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: '$background',
  color: '$text',
  boxShadow: '$sm',
  '&:hover': { backgroundColor: '$backgroundContrast' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-placeholder]': { color: '$text' },
});

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: '$text',
});

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: '$backgroundContrast',
  borderRadius: 6,
  zIndex: '$3',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
  backgroundColor: '$backgroundContrast',
});

function Content({ children, ...props }: React.PropsWithChildren<{}>) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  );
}

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$text',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$backgroundContrast',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$gray200',
    color: '$text',
  },
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: '$backgroundContrast',
  color: '$text',
  cursor: 'default',
};

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
);

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
);

// Exports
export const Select = SelectPrimitive.Root;
export const SelectTrigger = StyledTrigger;
export const SelectValue = SelectPrimitive.Value;
export const SelectIcon = StyledIcon;
export const SelectContent = Content;
export const SelectViewport = StyledViewport;
export const SelectItem = StyledItem;
export const SelectItemText = SelectPrimitive.ItemText;
export const SelectScrollUpButton = StyledScrollUpButton;
export const SelectScrollDownButton = StyledScrollDownButton;
