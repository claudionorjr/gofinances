import React from 'react';
import { Container, Title } from './styles';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default Header;
