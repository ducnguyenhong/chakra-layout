import { Meta, Story } from '@storybook/react';
import { ComponentProps } from 'react';
import { Button } from './button';
import { ButtonProps } from './button.type';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const ButtonComponent: Story<ComponentProps<typeof Button>> = (args: ButtonProps) => {
  return (
    <Button {...args} />
  )
};

export const PrimaryButton = ButtonComponent.bind({});
PrimaryButton.storyName = 'Primary';
PrimaryButton.args = {
  children: 'Primary Button',
  variant: 'primary',
};

export const SuccessButton = ButtonComponent.bind({});
SuccessButton.storyName = 'Success';
SuccessButton.args = {
  children: 'Success Button',
  variant: 'success',
};

export const DangerButton = ButtonComponent.bind({});
DangerButton.storyName = 'Danger';
DangerButton.args = {
  children: 'Danger Button',
  variant: 'danger',
};

export const WarningButton = ButtonComponent.bind({});
WarningButton.storyName = 'Warning';
WarningButton.args = {
  children: 'Warning Button',
  variant: 'warning',
};

export const InfoButton = ButtonComponent.bind({});
InfoButton.storyName = 'Info';
InfoButton.args = {
  children: 'Info Button',
  variant: 'info',
};

export const DarkButton = ButtonComponent.bind({});
DarkButton.storyName = 'Dark';
DarkButton.args = {
  children: 'Dark Button',
  variant: 'dark',
};

export const LightButton = ButtonComponent.bind({});
LightButton.storyName = 'Light';
LightButton.args = {
  children: 'Light Button',
  variant: 'light',
};

export const DisabledButton = ButtonComponent.bind({});
DisabledButton.storyName = 'Disabled';
DisabledButton.args = {
  children: 'Disabled Button',
  disabled: true
};

export const ButtonWithIcon = ButtonComponent.bind({});
ButtonWithIcon.storyName = 'With Icon';
ButtonWithIcon.args = {
  children: 'With Icon',
  icon: {
    position: 'left',
    element: <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
  }
};
