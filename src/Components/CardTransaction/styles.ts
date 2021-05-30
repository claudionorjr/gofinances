import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

interface TypeProps {
  type: 'income' | 'outcome';
}

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: ${normalizePixel(17, 'height')}px ${normalizePixel(24)}px
    ${normalizePixel(18, 'height')}px ${normalizePixel(24)}px;
  margin-bottom: ${normalizePixel(16, 'height')}px;
`;

export const ContainerCard = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${normalizePixel(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(21)}px;
`;

export const Value = styled.Text<TypeProps>`
  color: ${({ theme, type }) =>
    type === 'income' ? theme.colors.success : theme.colors.attention};
  font-size: ${normalizePixel(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(30)}px;
`;

export const ContainerInfos = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${normalizePixel(20, 'height')}px;
`;

export const ContainerType = styled.View`
  flex-direction: row;
`;

export const TypeTransaction = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${normalizePixel(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(21)}px;
  margin-left: ${normalizePixel(12)}px;
`;

export const DateText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${normalizePixel(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(21)}px;
`;
