import { Button, type ButtonProps } from '@mui/material';
import type { ReactNode } from 'react';
import { buttonElementStyle } from './ButtonElement.styles';

type Props = ButtonProps & {
  children: ReactNode;
};

export function ButtonElement({ children, ...rest }: Props) {
  return (
    <Button {...rest} sx={buttonElementStyle}>
      {children}
    </Button>
  );
}
