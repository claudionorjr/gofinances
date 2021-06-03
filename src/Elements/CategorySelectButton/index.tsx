import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../Hooks';
import { Container, Title } from './styles';
import { normalizePixel } from '../../Helpers';

interface Props {
  title: string;
  onPress(): void;
}

const CategorySelectButton = ({ title, onPress }: Props) => {
  const { colors } = useTheme();
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
      <Feather
        name="chevrons-down"
        size={normalizePixel(20)}
        color={colors.text}
      />
    </Container>
  );
};

export default CategorySelectButton;
