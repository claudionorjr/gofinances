import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Form = styled.View`
  flex: 1;
  padding: ${normalizePixel(24)}px;
  justify-content: space-between;
`;

export const Fields = styled.View``;

export const SelectButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
