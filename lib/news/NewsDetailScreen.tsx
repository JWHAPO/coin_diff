// NewsDetailScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsDetailScreen = ({ route }: { route: any }) => {
  const { news } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.timeAgo}>{news.timeAgo}</Text>
      <Text>{news.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  timeAgo: {
    color: '#777',
  },
});

export default NewsDetailScreen;
