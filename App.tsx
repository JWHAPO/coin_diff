/**
 * Coin Diff React Native App
 * Authors : LYJ, CJY, PJH, KJW
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import HomeScreen from './src/home/HomeScreen';
import { MemberProvider } from './contexts/MemberContext';
import Icon from 'react-native-vector-icons/Ionicons';
import MyScreenStack from './src/my/MyScreenStack';
import NewsStack from './src/news/NewsStack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <MemberProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Tab.Navigator>
            <Tab.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home-outline" color={color} size={size} />
                ),
                title: '홈'
              }} 
            />
            <Tab.Screen 
              name="News" 
              component={NewsStack} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="newspaper-outline" color={color} size={size} />
                ),
                title: '뉴스'
              }} 
            />
            <Tab.Screen 
              name="My" 
              component={MyScreenStack} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="person-outline" color={color} size={size} />
                ),
                headerShown: false,
              }} 
            />
          </Tab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </MemberProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  timeAgo: {
    color: '#777',
  },
});

export default App;
