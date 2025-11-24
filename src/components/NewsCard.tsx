import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NewsItem } from '../store/newsStore';

interface Props {
  item: NewsItem;
  onPress: () => void;
}

export const NewsCard: React.FC<Props> = ({ item, onPress }) => {
  const formatDate = (iso: string) => {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.9 }]}
    >
      <View style={styles.textContainer}>
        {item.url !== '' && (
          <Image
            source={{ uri: item.url }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={3} style={styles.body}>
          {item.text}
        </Text>

        <View style={styles.footer}>
          <View style={styles.time}>
            <Text style={styles.timeText}>{formatDate(item.created_at)}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#00000029',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#eee',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
  footer: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#888',
  },
});
