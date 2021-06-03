import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../Hooks';
import { Container, ButtonText } from './styles';
import { normalizePixel } from '../../Helpers';

interface Props extends TouchableOpacityProps {
  title: string;
  buttonType: 'income' | 'outcome';
  selected: { isIncome: boolean; isOutcome: boolean };
}

const TransactionButton = ({ title, buttonType, selected, ...rest }: Props) => {
  const { colors } = useTheme();
  return (
    <Container selected={selected} buttonType={buttonType} {...rest}>
      {buttonType === 'income' ? (
        <Feather
          size={normalizePixel(24)}
          name="arrow-up-circle"
          color={colors.success}
        />
      ) : (
        <Feather
          size={normalizePixel(24)}
          name="arrow-down-circle"
          color={colors.attention}
        />
      )}
      <ButtonText>{title}</ButtonText>
    </Container>
  );
};

export default TransactionButton;
