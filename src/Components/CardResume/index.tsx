import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Icon } from '../../Elements';
import { useTheme } from '../../Hooks';
import {
  Container,
  TextTypeCard,
  ContainerCard,
  ContainerInfos,
  Amount,
  LastTransation,
} from './styles';

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
          <Icon.ArrowIncome size={40} />
        ) : type === 'outcome' ? (
          <Icon.ArrowOutcome size={40} />
        ) : (
          <Icon.Money color={colors.shape} size={40} />
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
