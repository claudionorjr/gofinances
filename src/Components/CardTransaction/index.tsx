import React from 'react';
import getInfoInTransactions from '../../Helpers/getInfoInTransactions';
import { useTheme } from '../../Hooks';
import {
  Container,
  ContainerCard,
  Title,
  Value,
  ContainerInfos,
  ContainerType,
  TypeTransaction,
  DateText,
} from './styles';

interface Props {
  typeMoney: 'income' | 'outcome';
  title: string;
  amount: string;
  date: string;
  category: string;
}

const CardTransaction = ({
  amount,
  date,
  title,
  typeMoney,
  category,
}: Props) => {
  const { colors } = useTheme();
  const getInfoInTransaction = getInfoInTransactions(category, colors.text);
  return (
    <Container>
      <ContainerCard>
        <Title>{title}</Title>
        <Value type={typeMoney}>
          {typeMoney === 'income' ? `R$ ${amount}` : `- R$ ${amount}`}
        </Value>
      </ContainerCard>
      <ContainerInfos>
        <ContainerType>
          {getInfoInTransaction.icon}
          <TypeTransaction>{getInfoInTransaction.text}</TypeTransaction>
        </ContainerType>
        <DateText>{date}</DateText>
      </ContainerInfos>
    </Container>
  );
};

export default CardTransaction;
