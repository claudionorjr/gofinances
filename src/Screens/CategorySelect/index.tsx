import React from 'react';
import { FlatList } from 'react-native';
import { Header } from '../../Components';
import { Button } from '../../Elements';
import getInfoInTransactions from '../../Helpers/getInfoInTransactions';
import { useTheme } from '../../Hooks';
import {
  Container,
  ContentContainer,
  Category,
  Name,
  Separator,
  Footer,
} from './styles';

interface Props {
  category: string;
  setCategory: (name: string) => void;
  onClose: () => void;
}

const categories = ['sales', 'food', 'car', 'leisure', 'shop', 'studies'];

const CategorySelect = ({ category, onClose, setCategory }: Props) => {
  const { colors } = useTheme();

  return (
    <Container>
      <Header title={category} />
      <ContentContainer>
        <FlatList
          data={categories}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Category
              isActive={category === getInfoInTransactions(item).text}
              onPress={() => setCategory(item)}
            >
              {getInfoInTransactions(item, colors.title).icon}
              <Name>{getInfoInTransactions(item).text}</Name>
            </Category>
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
        <Footer>
          <Button onPress={onClose} title="Selecionar" />
        </Footer>
      </ContentContainer>
    </Container>
  );
};

export default CategorySelect;
