// HomeDetailScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Exchange } from './types';

const HomeDetailScreen = ({ route }: { route: any }) => {
  const { coin } = route.params;

  const renderExchangeItem = ({ item }: { item: Exchange }) => (
    <View style={styles.exchangeItem}>
      <Image source={item.logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.exchangeInfo}>
        <Text style={styles.exchangeName}>{item.name}</Text>
        <Text style={styles.priceText}>{`Price: ${item.price}`}</Text>
        <Text style={styles.changeRateText}>{`Change: ${item.changeRate}`}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${coin.baseCode}/${coin.quoteCode}`}</Text>
      <FlatList
        data={coin.exchanges}
        renderItem={renderExchangeItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
      />
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
    marginBottom: 16,
  },
  list: {
    paddingBottom: 20,
  },
  exchangeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 8,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  exchangeInfo: {
    flex: 1,
  },
  exchangeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 14,
  },
  changeRateText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default HomeDetailScreen;
