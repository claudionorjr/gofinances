import React from 'react';
import { Feather } from '@expo/vector-icons';
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
  LogoutButton,
} from './styles';
import { CardResume, CardTransaction } from '../../Components';
import { Transaction } from '../../@Types/Transaction';
import { normalizePixel } from '../../Helpers';
import { useTheme } from '../../Hooks';

const Dashboard = () => {
  const transactions: Transaction[] = [
    {
      id: '1',
      amount: '12.000,00',
      date: '13/04/2020',
      title: 'Desenvolvimento de site',
      typeMoney: 'income',
      category: 'sales',
    },
    {
      id: '2',
      amount: '50,00',
      date: '13/04/2020',
      title: 'Almoço',
      typeMoney: 'outcome',
      category: 'food',
    },
    {
      id: '3',
      amount: '30,00',
      date: '13/04/2020',
      title: 'Lanche',
      typeMoney: 'outcome',
      category: 'food',
    },
    {
      id: '4',
      amount: '5,00',
      date: '13/04/2020',
      title: 'Reparos do Carro',
      typeMoney: 'outcome',
      category: 'car',
    },
  ];

  const { colors } = useTheme();

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
          <LogoutButton onPress={() => {}}>
            <Feather
              size={normalizePixel(24)}
              name="power"
              color={colors.secondary}
            />
          </LogoutButton>
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
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <CardTransaction
              amount={item.amount}
              date={item.date}
              title={item.title}
              typeMoney={item.typeMoney}
              category={item.category}
            />
          )}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
