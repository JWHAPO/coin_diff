/**
 * Coin Diff React Native App
 * Authors : LYJ, CJY, PJH, KJW
 */

// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeStack from './src/home/HomeStack'; // HomeStack import
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
              name="HomeTab" // 이름 변경
              component={HomeStack} 
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
});

export default App;
