// NewsItem.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NewsItem as NewsItemType } from './newsData';
import { NavigationProp } from '@react-navigation/native';

type NewsItemProps = {
  item: NewsItemType;
  navigation: NavigationProp<any>;
};

const NewsItem: React.FC<NewsItemProps> = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.newsItem}
    onPress={() => navigation.navigate('NewsDetail', { news: item })}
  >
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.timeAgo}>{item.timeAgo}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  newsItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeAgo: {
    color: '#777',
  },
});

export default NewsItem;
