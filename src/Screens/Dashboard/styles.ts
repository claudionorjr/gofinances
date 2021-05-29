import styled from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${normalizePixel(278, 'height')}px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-horizontal: ${normalizePixel(24)}px;
  padding-top: ${normalizePixel(24)}px;
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
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${normalizePixel(18)};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
