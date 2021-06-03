import React, { useCallback, useState } from 'react';
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Input,
  Button,
  CategorySelectButton,
  TransactionButton,
} from '../../Elements';
import { Header } from '../../Components';
import { Container, Form, Fields, SelectButtonsContainer } from './styles';
import CategorySelect from '../CategorySelect';
import getInfoInTransactions from '../../Helpers/getInfoInTransactions';

interface FormData {
  name: string;
  amount: string;
}

const Register = () => {
  const [isIncome, setIsIncome] = useState(false);
  const [isOutcome, setIsOutcome] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [category, setCategory] = useState('');

  const handleIncome = useCallback(() => {
    setIsIncome(true);
    setIsOutcome(false);
  }, [isIncome]);

  const handleOutcome = useCallback(() => {
    setIsIncome(false);
    setIsOutcome(true);
  }, [isOutcome]);

  const handleModal = useCallback(() => {
    setIsModal(!isModal);
  }, [isModal]);

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number()
      .typeError('Informe um valor númerico')
      .positive('Informe um valor positivo'),
  });

  const handleRegister = useCallback(
    (form: FormData) => {
      if (!isIncome && !isOutcome) {
        return Alert.alert('Ops...', 'Selecione o tipo da transação.');
      }

      if (category === '') {
        return Alert.alert('Ops...', 'Selecione uma categoria.');
      }

      const data = {
        name: form.name,
        amount: form.amount,
        transactionType: isIncome ? 'income' : isOutcome ? 'outcome' : null,
        category,
      };
      return console.log(data);
    },
    [isIncome, isOutcome, category],
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header title="Cadastro" />
        <Form>
          <Fields>
            <Input
              control={control}
              name="name"
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <Input
              control={control}
              name="amount"
              placeholder="preço"
              keyboardType="numeric"
              error={errors.amount && errors.amount.message}
            />
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
            <CategorySelectButton
              title={
                !category ? 'Categorias' : getInfoInTransactions(category).text
              }
              onPress={handleModal}
            />
          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>
        <Modal visible={isModal} animationType="slide">
          <CategorySelect
            category={
              !category ? 'Categorias' : getInfoInTransactions(category).text
            }
            setCategory={setCategory}
            onClose={handleModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Register;
