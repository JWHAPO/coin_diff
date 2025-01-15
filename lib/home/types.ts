// types.ts

export interface Exchange {
    name: string;
    logo: any;
    price: number;
    changeRate: string;
  }
  
  export interface CryptoData {
    id: string;
    baseCode: string;
    quoteCode: string;
    exchanges: Exchange[];
  }
  