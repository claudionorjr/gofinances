import React from 'react';
import { Feather } from '@expo/vector-icons';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from '../../Hooks';
import { Container, ButtonText, Button } from './styles';
import { normalizePixel } from '../../Helpers';

interface Props extends RectButtonProps {
  title: string;
  buttonType: 'income' | 'outcome';
  selected: { isIncome: boolean; isOutcome: boolean };
}

const TransactionButton = ({ title, buttonType, selected, ...rest }: Props) => {
  const { colors } = useTheme();
  return (
    <Container selected={selected} buttonType={buttonType}>
      <Button {...rest}>
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
      </Button>
    </Container>
  );
};

export default TransactionButton;
