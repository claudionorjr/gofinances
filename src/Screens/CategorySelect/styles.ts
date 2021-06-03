import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { normalizePixel } from '../../Helpers';

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: ${normalizePixel(24)}px;
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;
  padding: ${normalizePixel(15)}px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ isActive, theme }) => {
    return isActive ? theme.colors.secondaryLight : 'transparent';
  }};
`;
export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${normalizePixel(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${normalizePixel(21)}px;
  margin-left: ${normalizePixel(16)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View``;
