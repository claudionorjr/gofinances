import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../Hooks';
import {
  Container,
  TextTypeCard,
  ContainerCard,
  ContainerInfos,
  Amount,
  LastTransation,
} from './styles';
import { normalizePixel } from '../../Helpers';

interface Props {
  type: 'income' | 'outcome' | 'total';
  amount: number | string;
  lastTransation: string;
}

const CardResume = ({ type, amount, lastTransation }: Props) => {
  const checkTypeCardIndicator =
    type === 'income' ? 'Entradas' : type === 'outcome' ? 'Saídas' : 'Total';

  const { colors } = useTheme();
  return (
    <Container type={type}>
      <ContainerCard>
        <TextTypeCard type={type}>{checkTypeCardIndicator}</TextTypeCard>
        {type === 'income' ? (
          <Feather
            size={normalizePixel(40)}
            name="arrow-up-circle"
            color={colors.success}
          />
        ) : type === 'outcome' ? (
          <Feather
            size={normalizePixel(40)}
            name="arrow-down-circle"
            color={colors.attention}
          />
        ) : (
          <Feather
            size={normalizePixel(40)}
            name="dollar-sign"
            color={colors.shape}
          />
        )}
      </ContainerCard>
      <ContainerInfos>
        <Amount type={type}>R$ {amount}</Amount>
        <LastTransation type={type}>{lastTransation}</LastTransation>
      </ContainerInfos>
    </Container>
  );
};

export default CardResume;
