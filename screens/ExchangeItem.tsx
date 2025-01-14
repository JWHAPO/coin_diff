// ExchangeItem.tsx

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Exchange } from './types';

interface ExchangeItemProps {
  exchange: Exchange;
  isBase: boolean;
  baseCode: string;
  quoteCode: string;
}

const ExchangeItem: React.FC<ExchangeItemProps> = ({ exchange, isBase, baseCode, quoteCode }) => {
  const priceDifference = ((exchange.price - (isBase ? 0 : exchange.price)) / (isBase ? 1 : exchange.price) * 100).toFixed(2);

  return (
    <View style={styles.exchangeContainer}>
      {isBase ? (
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
  );
};

const styles = StyleSheet.create({
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
    flexShrink: 1,
    flex: 2,
  },
  priceDifferenceText: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginVertical: 4,
    flex: 1,
  },
});

export default ExchangeItem;
