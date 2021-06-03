import React from 'react';
import { Feather } from '@expo/vector-icons';
import normalizePixel from './normalizePixel';

interface Props {
  text: string;
  icon: React.ReactElement;
  color: string;
}

const getInfoInTransactions = (
  categories: string,
  color?: string | undefined,
): Props => {
  switch (categories) {
    case 'food':
      return {
        text: 'Alimentação',
        icon: <Feather size={normalizePixel(20)} color={color} name="coffee" />,
        color: '#FF872C',
      };
    case 'car':
      return {
        text: 'Carro',
        icon: <Feather size={normalizePixel(20)} color={color} name="truck" />,
        color: '#E83F5B',
      };
    case 'shop':
      return {
        text: 'Compras',
        icon: (
          <Feather
            size={normalizePixel(20)}
            color={color}
            name="shopping-bag"
          />
        ),
        color: '#5636D3',
      };
    case 'leisure':
      return {
        text: 'Lazer',
        icon: (
          <Feather size={normalizePixel(20)} color={color} name="play-circle" />
        ),
        color: '#26195C',
      };

    case 'studies':
      return {
        text: 'Estudos',
        icon: <Feather size={normalizePixel(20)} color={color} name="book" />,
        color: '#9C001A',
      };
    default:
      return {
        text: 'Ganhos',
        icon: (
          <Feather size={normalizePixel(20)} color={color} name="dollar-sign" />
        ),
        color: '#12A454',
      };
  }
};

export default getInfoInTransactions;
