// HomeStack.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import HomeDetailScreen from './HomeDetailScreen';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{ title: '홈' }} 
    />
    <Stack.Screen 
      name="DetailScreen" 
      component={HomeDetailScreen} 
      options={{ title: '상세보기' }} 
    />
  </Stack.Navigator>
);

export default HomeStack;
