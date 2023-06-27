import { Button } from '@chakra-ui/react';
import { memo } from 'react';
import { ButtonProps } from './button.type';

const ButtonUI: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', disabled, children, icon, ...childProps } = props;

  return <Button>a</Button>;
};

export default memo(ButtonUI);
