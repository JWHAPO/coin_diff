// NewsListScreen.tsx

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { newsData } from './newsData';
import NewsItem from './NewsItem';

type NewsListScreenProps = {
  navigation: NavigationProp<any>;
};

const NewsListScreen: React.FC<NewsListScreenProps> = ({ navigation }) => {
  const renderItem = ({ item }: { item: typeof newsData[0] }) => (
    <NewsItem item={item} navigation={navigation} />
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
});

export default NewsListScreen;
