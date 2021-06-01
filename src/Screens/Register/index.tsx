import React, { useCallback, useState } from 'react';
import { Input, Button } from '../../Elements';
import TransactionButton from '../../Elements/TransactionButton';
import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  SelectButtonsContainer,
} from './styles';

const Register = () => {
  const [isIncome, setIsIncome] = useState(false);
  const [isOutcome, setIsOutcome] = useState(false);

  const handleIncome = useCallback(() => {
    setIsIncome(true);
    setIsOutcome(false);
  }, [isIncome]);

  const handleOutcome = useCallback(() => {
    setIsIncome(false);
    setIsOutcome(true);
  }, [isOutcome]);

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="preço" />
          <SelectButtonsContainer>
            <TransactionButton
              onPress={handleIncome}
              title="Income"
              buttonType="income"
              selected={{ isIncome, isOutcome }}
            />
            <TransactionButton
              onPress={handleOutcome}
              title="Outcome"
              buttonType="outcome"
              selected={{ isIncome, isOutcome }}
            />
          </SelectButtonsContainer>
        </Fields>
        <Button title="Enviar" onPress={() => {}} />
      </Form>
    </Container>
  );
};

export default Register;
