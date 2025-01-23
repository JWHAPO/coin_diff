/**
 * Coin Diff React Native App
 * Authors : LYJ, CJY, PJH, KJW
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'; // View와 Text 추가 임포트
import HomeScreen from './lib/home/HomeScreen';
import { MemberProvider } from './contexts/MemberContext';
import Icon from 'react-native-vector-icons/Ionicons';
import NewsListScreen from './lib/news/NewsListScreen';
import MyScreenStack from './lib/my/MyScreenStack';

// Stack과 Tab Navigator 생성
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// NewsDetailScreen 추가
const NewsDetailScreen = ({ route }: { route: any }) => { // 타입 정의 추가
  const { news } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.timeAgo}>{news.timeAgo}</Text>
      <Text>{news.content}</Text>
    </View>
  );
};

// NewsStack 구성
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
