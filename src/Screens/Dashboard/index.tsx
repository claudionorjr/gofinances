import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import {
  Container,
  Header,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserContainer,
  CardsValues,
  Transactions,
  TitleTransactions,
  TransactionsList,
} from './styles';
import { Icon } from '../../Elements';
import { CardResume, CardTransaction } from '../../Components';
import { Transaction } from '../../@Types/Transaction';

const Dashboard = () => {
  const transactions: Transaction[] = [
    {
      amount: '12.000,00',
      date: '13/04/2020',
      title: 'Desenvolvimento de site',
      typeMoney: 'income',
      categories: 'sales',
    },
    {
      amount: '50,00',
      date: '13/04/2020',
      title: 'Almoço',
      typeMoney: 'outcome',
      categories: 'food',
    },
    {
      amount: '30,00',
      date: '13/04/2020',
      title: 'Lanche',
      typeMoney: 'outcome',
      categories: 'food',
    },
    {
      amount: '5,00',
      date: '13/04/2020',
      title: 'Água',
      typeMoney: 'outcome',
      categories: 'food',
    },
  ];

  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/58224002?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Fulano</UserName>
            </User>
          </UserInfo>
          <Icon.Power size={24} />
        </UserContainer>
      </Header>
      <CardsValues>
        <CardResume
          lastTransation="asdasdasdddasadss"
          type="income"
          amount="1250,00"
        />
        <CardResume
          lastTransation="asdasdasdddasadss"
          type="outcome"
          amount="1250,00"
        />
        <CardResume
          lastTransation="asdasdasdddasadss"
          type="total"
          amount="1250,00"
        />
      </CardsValues>
      <Transactions>
        <TitleTransactions>Listagem</TitleTransactions>
        <TransactionsList
          data={transactions}
          renderItem={({ item }) => (
            <CardTransaction
              amount={item.amount}
              date={item.date}
              title={item.title}
              typeMoney={item.typeMoney}
              categories={item.categories}
            />
          )}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
