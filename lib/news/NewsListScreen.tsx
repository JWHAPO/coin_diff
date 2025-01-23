// NewsListScreen.tsx

import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type NewsItem = {
  id: string;
  title: string;
  timeAgo: string;
  content: string;
};

type NewsListScreenProps = {
  navigation: NavigationProp<any>;
};

const newsData: NewsItem[] = [
  { id: '1', title: '첫 번째 뉴스 기사', timeAgo: '2시간 전', content: '첫 번째 뉴스 기사의 내용입니다.' },
  { id: '2', title: '두 번째 뉴스 기사', timeAgo: '5시간 전', content: '두 번째 뉴스 기사의 내용입니다.' },
  { id: '3', title: '세 번째 뉴스 기사', timeAgo: '1일 전', content: '세 번째 뉴스 기사의 내용입니다.' },
  // 추가 뉴스 기사 데이터...
];

const NewsListScreen: React.FC<NewsListScreenProps> = ({ navigation }) => {
  const renderItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => navigation.navigate('NewsDetail', { news: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.timeAgo}>{item.timeAgo}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
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

export default NewsListScreen;
