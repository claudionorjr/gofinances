import React from 'react';
import { Categories } from '../@Types/Categories';
import { Icon } from '../Elements';

interface Props {
  text: string;
  icon: React.ReactElement;
}

const getInfoInTransactions = ({ categories }: Categories): Props => {
  switch (categories) {
    case 'food':
      return {
        text: 'Alimentação',
        icon: <Icon.Food size={20} />,
      };
    default:
      return {
        text: 'Vendas',
        icon: <Icon.Money size={20} />,
      };
  }
};

export default getInfoInTransactions;
