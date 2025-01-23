// NewsStack.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsListScreen from './NewsListScreen';
import NewsDetailScreen from './NewsDetailScreen';

const Stack = createStackNavigator();

const NewsStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="NewsList" 
      component={NewsListScreen} 
      options={{ title: '뉴스 목록' }} 
    />
    <Stack.Screen 
      name="NewsDetail" 
      component={NewsDetailScreen} 
      options={{ title: '뉴스 상세보기' }} 
    />
  </Stack.Navigator>
);

export default NewsStack;
