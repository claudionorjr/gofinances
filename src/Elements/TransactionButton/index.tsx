import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Icon } from '..';
import { Container, ButtonText } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  buttonType: 'income' | 'outcome';
  selected: { isIncome: boolean; isOutcome: boolean };
}

const TransactionButton = ({ title, buttonType, selected, ...rest }: Props) => {
  return (
    <Container selected={selected} buttonType={buttonType} {...rest}>
      {buttonType === 'income' ? (
        <Icon.ArrowIncome size={24} />
      ) : (
        <Icon.ArrowOutcome size={24} />
      )}
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default TransactionButton;
