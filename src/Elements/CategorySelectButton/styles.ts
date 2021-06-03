import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  height: ${normalizePixel(56)}px;
  padding: ${normalizePixel(16)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${normalizePixel(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(21)}px;
`;
