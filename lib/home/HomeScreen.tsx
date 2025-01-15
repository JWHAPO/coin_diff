// HomeScreen.tsx

import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import data from './data';
import { CryptoData } from './types';

const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // 검색어를 기반으로 데이터 필터링
  const filteredData = data.filter(item => {
    const { baseCode, quoteCode, exchanges } = item;
    const searchLower = searchQuery.toLowerCase();

    // 새 검색 기준: '$baseCode/$quoteCode$baseCode${exchange.name}'
    const searchString = `${baseCode}/${quoteCode}${baseCode}${quoteCode}`;

    // baseCode, quoteCode, exchange name에 검색어가 포함되어 있는지 확인
    return (
      searchString.toLowerCase().includes(searchLower) ||
      exchanges.some(exchange => `${searchString}${exchange.name}`.toLowerCase().includes(searchLower))
    );
  });

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
              <Text style={styles.tileText} numberOfLines={1} adjustsFontSizeToFit>
                {exchange.price}
              </Text>
              <Text style={styles.tileText} numberOfLines={1} adjustsFontSizeToFit>
                {`${exchange.changeRate} %`}
              </Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or code..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredData}
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
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 12,
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
    textAlignVertical: 'center', // 수직 정렬을 중앙으로 설정
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
