// HomeScreen.tsx

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image } from 'react-native';

// 데이터 타입 정의
interface CryptoData {
  id: string;
  baseCode: string;
  quoteCode: string;
  exchanges: {
    name: string;
    logo: any; // 이미지 소스 타입
    price: number;
    changeRate: string;
  }[];
}

// 가상 자산 데이터
const data: CryptoData[] = [
  {
    id: '1',
    baseCode: 'BTC',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'Upbit', logo: require('../assets/exchangeUpbit.png'), price: 42000, changeRate: '+1.53' },
      { name: 'Bithumb', logo: require('../assets/exchangeBithumb.png'), price: 41950, changeRate: '+0.50' },
    ],
  },
  {
    id: '2',
    baseCode: 'ETH',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'OKX', logo: require('../assets/exchangeOkx.jpeg'), price: 2800, changeRate: '+2.10' },
      { name: 'Bitget', logo: require('../assets/exchangeBitget.png'), price: 2790, changeRate: '-1.00' },
    ],
  },
  {
    id: '3',
    baseCode: 'XRP',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'Upbit', logo: require('../assets/exchangeUpbit.png'), price: 0.60, changeRate: '+1.00' },
      { name: 'Binance', logo: require('../assets/exchangeBinance.png'), price: 0.61, changeRate: '-0.50' },
    ],
  },
  {
    id: '4',
    baseCode: 'LTC',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'Bithumb', logo: require('../assets/exchangeBithumb.png'), price: 150, changeRate: '+1.20' },
      { name: 'OKX', logo: require('../assets/exchangeOkx.jpeg'), price: 149, changeRate: '-0.80' },
    ],
  },
  {
    id: '5',
    baseCode: 'ADA',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'Bitget', logo: require('../assets/exchangeBitget.png'), price: 0.40, changeRate: '+2.50' },
      { name: 'Bybit', logo: require('../assets/exchangeBybit.jpeg'), price: 0.39, changeRate: '-1.00' },
    ],
  },
  {
    id: '6',
    baseCode: 'DOT',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'Binance', logo: require('../assets/exchangeBinance.png'), price: 10, changeRate: '+0.50' },
      { name: 'Upbit', logo: require('../assets/exchangeUpbit.png'), price: 10.5, changeRate: '-0.30' },
    ],
  },
  {
    id: '7',
    baseCode: 'LINK',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'Bithumb', logo: require('../assets/exchangeBithumb.png'), price: 15, changeRate: '+1.00' },
      { name: 'OKX', logo: require('../assets/exchangeOkx.jpeg'), price: 14.8, changeRate: '-0.50' },
    ],
  },
  {
    id: '8',
    baseCode: 'SOL',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'Upbit', logo: require('../assets/exchangeUpbit.png'), price: 25, changeRate: '+2.00' },
      { name: 'Binance', logo: require('../assets/exchangeBinance.png'), price: 24.5, changeRate: '-1.00' },
    ],
  },
  {
    id: '9',
    baseCode: 'MATIC',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'Bitget', logo: require('../assets/exchangeBitget.png'), price: 1.2, changeRate: '+1.50' },
      { name: 'Bybit', logo: require('../assets/exchangeBybit.jpeg'), price: 1.18, changeRate: '-0.20' },
    ],
  },
  {
    id: '10',
    baseCode: 'AVAX',
    quoteCode: 'USDT',
    exchanges: [
      { name: 'Bithumb', logo: require('../assets/exchangeBithumb.png'), price: 15, changeRate: '+1.25' },
      { name: 'OKX', logo: require('../assets/exchangeOkx.jpeg'), price: 14.9, changeRate: '-0.40' },
    ],
  },
];

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
    width: 30, // 이미지 크기 조정
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
    textAlign: 'left', // 좌측 정렬
    fontWeight: 'bold', // 강조
    marginVertical: 4,
    flex: 1, // 괴리율 영역 비율 설정
  },
  infoContainer: {
    flex: 2, // BTC/USDT 및 괴리율의 비율 설정
    justifyContent: 'center', // 중앙 정렬
  },
});

export default HomeScreen;
