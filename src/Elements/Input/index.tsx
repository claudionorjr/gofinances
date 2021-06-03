import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Container, CustomInput, Error } from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

const Input = ({ control, name, error, ...rest }: Props) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput onChangeText={onChange} value={value} {...rest} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default Input;
