import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-horizontal: ${normalizePixel(24)}px;
  padding-top: ${normalizePixel(24, 'height')}px;

  ${Platform.OS === 'android' &&
  css`
    height: ${normalizePixel(278, 'height')}px;
    padding-top: ${normalizePixel(24, 'height')}px;
  `}

  ${Platform.OS === 'ios' &&
  css`
    height: ${normalizePixel(278 + getStatusBarHeight(), 'height')}px;
    padding-top: ${normalizePixel(24 + getStatusBarHeight(), 'height')}px;
  `}
`;

export const UserContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${normalizePixel(48)}px;
  height: ${normalizePixel(48)}px;
  border-radius: ${normalizePixel(10)}px;
`;

export const User = styled.View`
  margin-left: ${normalizePixel(18)}px;
  justify-content: center;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${normalizePixel(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(24, 'height')}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${normalizePixel(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  line-height: ${normalizePixel(24, 'height')}px;
`;

export const CardsValues = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})``;
