import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { normalizePixel } from '../../Helpers';

interface Props {
  selected: { isIncome: boolean; isOutcome: boolean };
  buttonType: 'income' | 'outcome';
}

export const Container = styled(TouchableOpacity)<Props>`
  margin-top: ${normalizePixel(8)}px;
  margin-bottom: ${normalizePixel(16)}px;
  width: ${normalizePixel(160)}px;
  height: ${normalizePixel(56)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, selected, buttonType }) => {
    return buttonType === 'income' && selected.isIncome
      ? theme.colors.successLight
      : buttonType === 'outcome' && selected.isOutcome
      ? theme.colors.attentionLight
      : 'transparent';
  }};
  ${({ selected, buttonType }) =>
    selected.isIncome && buttonType === 'income'
      ? css`
          border-width: 0px;
        `
      : selected.isOutcome && buttonType === 'outcome'
      ? css`
          border-width: 0px;
        `
      : css`
          border-width: 1.5px;
        `}

  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  flex-direction: row;
  padding: ${normalizePixel(16)}px ${normalizePixel(35)}px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${normalizePixel(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: ${normalizePixel(21)}px;
  margin-left: ${normalizePixel(12)}px;
`;
