import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {colors} from '../theme'
import { SearchIcon } from './icons/SearchIcon';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<Props> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder='Search news...'
        placeholderTextColor={colors.secondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 9,
    backgroundColor: colors.secondaryLight,
    marginVertical: 12,
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
  },
});
