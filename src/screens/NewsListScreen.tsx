import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
} from 'react-native';

import { Layout } from '../components/Layout';
import { SearchBar } from '../components/SearchBar';
import { NewsCard } from '../components/NewsCard';
import { useNewsStore } from '../store/newsStore';
import { PlusIcon } from '../components/icons/PlusIcon';
import { colors } from '../theme';

const NewsListScreen = ({ navigation }: any) => {
  const [query, setQuery] = useState('');
  const { items, isLoading, loadNews } = useNewsStore();

  useEffect(() => {
    loadNews();
  }, [loadNews]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return items;

    return items.filter(
      item =>
        item.title.toLowerCase().includes(q) ||
        item.text.toLowerCase().includes(q),
    );
  }, [items, query]);

  return (
    <Layout>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <SearchBar value={query} onChangeText={setQuery} />
        </View>
        <Pressable
          onPress={() => navigation.navigate('CreateNews')}
          style={({ pressed }) => [styles.fab, pressed && { opacity: 0.9 }]}
        >
          <PlusIcon stroke="#6D6F73" />
        </Pressable>
      </View>
      {isLoading && (
        <View style={styles.center}>
          <ActivityIndicator />
        </View>
      )}

      {items.length === 0 ? (
        <View style={styles.center}>
          <Text>No items found</Text>
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <NewsCard
              item={item}
              onPress={() =>
                navigation.navigate('NewsActionsModal', { id: item.id })
              }
            />
          )}
          contentContainerStyle={[
            styles.listContent,
            filtered.length === 0 && styles.listEmpty,
          ]}
        />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 8,
    paddingBottom: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flex: 1,
    marginRight: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  listContent: {
    paddingBottom: 96,
  },
  listEmpty: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
  },
  fab: {
    width: 45,
    height: 45,
    borderRadius: 28,
    backgroundColor: colors.secondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewsListScreen;
