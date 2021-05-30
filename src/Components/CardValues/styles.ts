import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

interface CardTypeProps {
  type: 'income' | 'outcome' | 'total';
}

export const Container = styled.View<CardTypeProps>`
  width: ${normalizePixel(300)}px;
  height: ${normalizePixel(200, 'height')}px;
  padding-horizontal: ${normalizePixel(22)}px;
  padding-vertical: ${normalizePixel(22, 'height')}px;
  background-color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.secondary : theme.colors.shape};

  border-radius: 5px;
  margin-right: ${normalizePixel(16)}px;
`;

export const ContainerCard = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const TextTypeCard = styled.Text<CardTypeProps>`
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};

  font-size: ${normalizePixel(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(21)}px;
`;

export const ContainerInfos = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: ${normalizePixel(20, 'height')}px;
`;

export const Value = styled.Text<CardTypeProps>`
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.title};

  font-size: ${normalizePixel(32)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(48)}px;
`;

export const LastTransation = styled.Text<CardTypeProps>`
  color: ${({ theme, type }) =>
    type === 'total' ? theme.colors.shape : theme.colors.text};

  font-size: ${normalizePixel(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(18)}px;
`;
