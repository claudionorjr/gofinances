import React from 'react';
import { Categories } from '../../@Types/Categories';
import getInfoInTransactions from '../../Helpers/getInfoInTransactions';
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

interface Props extends Categories {
  typeMoney: 'income' | 'outcome';
  title: string;
  amount: string;
  date: string | Date;
}

const CardTransaction = ({
  amount,
  date,
  title,
  typeMoney,
  categories,
}: Props) => {
  const getInfoInTransaction = getInfoInTransactions({ categories });
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
