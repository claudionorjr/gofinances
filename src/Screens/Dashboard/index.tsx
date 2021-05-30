import React from 'react';
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
} from './styles';
import { Icon } from '../../Elements';
import { CardValues } from '../../Components';

const Dashboard = () => {
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
        <CardValues
          lastTransation="asdasdasdddasadss"
          type="income"
          value="1250,00"
        />
        <CardValues
          lastTransation="asdasdasdddasadss"
          type="outcome"
          value="1250,00"
        />
        <CardValues
          lastTransation="asdasdasdddasadss"
          type="total"
          value="1250,00"
        />
      </CardsValues>
    </Container>
  );
};

export default Dashboard;
