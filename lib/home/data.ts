// data.ts

import { CryptoData } from './types';

// 가상 자산 데이터
const data: CryptoData[] = [
    {
      id: '1',
      baseCode: 'BTC',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Upbit', logo: require('../../assets/exchangeUpbit.png'), price: 42000.55, changeRate: '+1.53' },
        { name: 'Bithumb', logo: require('../../assets/exchangeBithumb.png'), price: 41950, changeRate: '+0.50' },
      ],
    },
    {
      id: '2',
      baseCode: 'ETH',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'OKX', logo: require('../../assets/exchangeOkx.jpeg'), price: 2800, changeRate: '+2.10' },
        { name: 'Bitget', logo: require('../../assets/exchangeBitget.png'), price: 2790, changeRate: '-1.00' },
      ],
    },
    {
      id: '3',
      baseCode: 'XRP',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Upbit', logo: require('../../assets/exchangeUpbit.png'), price: 0.60, changeRate: '+1.00' },
        { name: 'Binance', logo: require('../../assets/exchangeBinance.png'), price: 0.61, changeRate: '-0.50' },
      ],
    },
    {
      id: '4',
      baseCode: 'LTC',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Bithumb', logo: require('../../assets/exchangeBithumb.png'), price: 150, changeRate: '+1.20' },
        { name: 'OKX', logo: require('../../assets/exchangeOkx.jpeg'), price: 149, changeRate: '-0.80' },
      ],
    },
    {
      id: '11',
      baseCode: 'DOGE',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Bithumb', logo: require('../../assets/exchangeBithumb.png'), price: 0.000029382492, changeRate: '+234.25' },
        { name: 'OKX', logo: require('../../assets/exchangeOkx.jpeg'), price: 0.000029424129, changeRate: '-10.40' },
      ],
    },
    {
      id: '5',
      baseCode: 'ADA',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Bitget', logo: require('../../assets/exchangeBitget.png'), price: 0.40, changeRate: '+2.50' },
        { name: 'Bybit', logo: require('../../assets/exchangeBybit.jpeg'), price: 0.39, changeRate: '-1.00' },
      ],
    },
    {
      id: '6',
      baseCode: 'DOT',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Binance', logo: require('../../assets/exchangeBinance.png'), price: 10, changeRate: '+0.50' },
        { name: 'Upbit', logo: require('../../assets/exchangeUpbit.png'), price: 10.5, changeRate: '-0.30' },
      ],
    },
    {
      id: '7',
      baseCode: 'LINK',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Bithumb', logo: require('../../assets/exchangeBithumb.png'), price: 15, changeRate: '+1.00' },
        { name: 'OKX', logo: require('../../assets/exchangeOkx.jpeg'), price: 14.8, changeRate: '-0.50' },
      ],
    },
    {
      id: '8',
      baseCode: 'SOL',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Upbit', logo: require('../../assets/exchangeUpbit.png'), price: 25, changeRate: '+2.00' },
        { name: 'Binance', logo: require('../../assets/exchangeBinance.png'), price: 24.5, changeRate: '-1.00' },
      ],
    },
    {
      id: '9',
      baseCode: 'MATIC',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Bitget', logo: require('../../assets/exchangeBitget.png'), price: 1.2, changeRate: '+1.50' },
        { name: 'Bybit', logo: require('../../assets/exchangeBybit.jpeg'), price: 1.18, changeRate: '-0.20' },
      ],
    },
    {
      id: '10',
      baseCode: 'AVAX',
      quoteCode: 'USDT',
      exchanges: [
        { name: 'Bithumb', logo: require('../../assets/exchangeBithumb.png'), price: 15, changeRate: '+1.25' },
        { name: 'OKX', logo: require('../../assets/exchangeOkx.jpeg'), price: 14.9, changeRate: '-0.40' },
      ],
    },
  ];
  
  export default data;