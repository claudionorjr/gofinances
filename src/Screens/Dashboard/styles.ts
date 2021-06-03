import styled, { css } from 'styled-components/native';
import { FlatList, Platform } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import { BorderlessButton } from 'react-native-gesture-handler';
import { normalizePixel } from '../../Helpers';
import { Transaction } from '../../@Types/Transaction';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-horizontal: ${normalizePixel(24)}px;

  ${Platform.OS === 'android' &&
  css`
    height: ${normalizePixel(248, 'height')}px;
    padding-top: ${normalizePixel(25, 'height')}px;
  `}

  ${Platform.OS === 'ios' &&
  css`
    height: ${normalizePixel(248 + getStatusBarHeight(), 'height')}px;
    padding-top: ${normalizePixel(25 + getStatusBarHeight(), 'height')}px;
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
  line-height: ${normalizePixel(24)}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${normalizePixel(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  line-height: ${normalizePixel(24)}px;
`;

export const LogoutButton = styled(BorderlessButton)``;

export const CardsValues = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 16 },
})`
  width: 100%;
  position: absolute;

  ${Platform.OS === 'android' &&
  css`
    top: ${normalizePixel(100, 'height')}px;
  `}

  ${Platform.OS === 'ios' &&
  css`
    top: ${normalizePixel(100 + getStatusBarHeight(), 'height')}px;
  `}
`;

export const Transactions = styled.View`
  flex: 1;
  padding-horizontal: ${normalizePixel(24)}px;
  margin-top: ${normalizePixel(84, 'height')}px;
`;
export const TitleTransactions = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${normalizePixel(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(27)}px;
  margin-bottom: ${normalizePixel(16, 'height')}px;
`;

export const TransactionsList = styled(
  FlatList as new () => FlatList<Transaction>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace(),
  },
})``;
