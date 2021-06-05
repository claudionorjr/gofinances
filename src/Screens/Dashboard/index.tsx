import React, { useEffect } from 'react';
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
import { formatMoney, normalizePixel } from '../../Helpers';
import { useTheme, useTransaction } from '../../Hooks';

const Dashboard = () => {
  const { transactions } = useTransaction();
  const { colors } = useTheme();

  useEffect(() => {}, [transactions]);

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
              amount={formatMoney(item.amount)}
              date={String(item.date)}
              title={item.name}
              typeMoney={item.transactionType!}
              category={item.category}
            />
          )}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
