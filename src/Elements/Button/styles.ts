import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  height: ${normalizePixel(56)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${normalizePixel(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: ${normalizePixel(21)}px;
`;
