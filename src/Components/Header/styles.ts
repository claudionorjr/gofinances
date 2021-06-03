import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';
import normalizePixel from '../../Helpers/normalizePixel';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-horizontal: ${normalizePixel(24)}px;
  align-items: center;

  ${Platform.OS === 'android' &&
  css`
    height: ${normalizePixel(83, 'height')}px;
    padding-top: ${normalizePixel(37, 'height')}px;
  `}

  ${Platform.OS === 'ios' &&
  css`
    height: ${normalizePixel(83 + getStatusBarHeight(), 'height')}px;
    padding-top: ${normalizePixel(37 + getStatusBarHeight(), 'height')}px;
  `}
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${normalizePixel(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(27)}px;
`;
