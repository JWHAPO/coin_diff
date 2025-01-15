// HomeScreen.tsx

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image } from 'react-native';
import data from './data';
import { CryptoData } from './types';

const HomeScreen: React.FC = () => {
  const renderItem = ({ item }: { item: CryptoData }) => {
    const { baseCode, quoteCode, exchanges } = item;

    // 가격 괴리율 계산
    const priceDifference = ((exchanges[1].price - exchanges[0].price) / exchanges[0].price * 100).toFixed(2);

    return (
      <View style={styles.tile}>
        {exchanges.map((exchange, index) => (
          <View key={exchange.name} style={styles.exchangeContainer}>
              {index === 0 ? (
                <Text style={styles.priceDifferenceText}>{`${baseCode}/${quoteCode}`}</Text>
              ) : (
                <Text style={styles.priceDifferenceText}>{`${priceDifference}%`}</Text>
              )}
            <Image source={exchange.logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.exchangeInfo}>
              <Text style={styles.tileText}>{exchange.price}</Text>
              <Text style={styles.tileText}>{`${exchange.changeRate} %`}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 12,
  },
  tile: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 8,
    borderRadius: 8,
  },
  exchangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  logo: {
    width: 30,
    height: 30,
    marginHorizontal: 8,
  },
  exchangeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  tileText: {
    textAlign: 'right',
    flexShrink: 1, // 텍스트가 필요한 공간만 차지하도록 설정
    flex: 2, // 텍스트 영역 비율 설정
  },
  priceDifferenceText: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginVertical: 4,
    flex: 1, // 괴리율 영역 비율 설정
  },
  infoContainer: {
    flex: 2, // BTC/USDT 및 괴리율의 비율 설정
    justifyContent: 'center',
  },
});

export default HomeScreen;
