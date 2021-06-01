import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled(TextInput)`
  width: 100%;
  height: ${normalizePixel(56, 'height')}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: ${normalizePixel(16)}px;
  color: ${({ theme }) => theme.colors.title};
  font-size: ${normalizePixel(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(21)}px;
  margin-bottom: ${normalizePixel(8, 'height')}px;
`;
