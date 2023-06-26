import { ButtonHTMLAttributes } from 'react';

export type ButtonType = 'primary' | 'success' | 'danger' | 'warning' | 'light' | 'dark' | 'info';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  disabled?: boolean;
  icon?: {
    element: JSX.Element;
    position?: 'left' | 'right';
  };
}
