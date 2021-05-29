import React from 'react';
import { Icon } from '../../Elements';
import {
  Container,
  TextTypeCard,
  ContainerCard,
  ContainerInfos,
  Value,
  LastTransation,
} from './styles';

interface Props {
  type: 'income' | 'outcome' | 'total';
  value: number | string;
  lastTransation: string;
}

const CardValues = ({ type, value, lastTransation }: Props) => {
  return (
    <Container type={type}>
      <ContainerCard>
        <TextTypeCard type={type}>Saída</TextTypeCard>
        {type === 'income' ? (
          <Icon.ArrowIncome size={40} />
        ) : type === 'outcome' ? (
          <Icon.ArrowOutcome size={40} />
        ) : (
          <Icon.Money size={40} />
        )}
      </ContainerCard>
      <ContainerInfos>
        <Value type={type}>R$ {value}</Value>
        <LastTransation type={type}>{lastTransation}</LastTransation>
      </ContainerInfos>
    </Container>
  );
};

export default CardValues;
