import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, ButtonText } from './styles';

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({ title, onPress, ...rest }: Props) => {
  return (
    <Container onPress={onPress} {...rest}>
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default Button;
