import React from 'react';
import { Container } from './styles';

interface Props {
  type: 'income' | 'outcome' | 'total';
  value: number;
  lastTransation: string;
}

const CardValues = ({ type, value, lastTransation }: Props) => {
  return <Container />;
};

export default CardValues;
