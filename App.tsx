// App.tsx

/**
 * Coin Diff React Native App
 * Authors : LYJ, CJY, PJH, KJW
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './lib/home/HomeScreen';
import NewsScreen from './lib/news/NewsScreen';
import MyScreen from './lib/my/MyScreen';
import RegisterNameScreen from './lib/my/RegisterNameScreen';
import RegisterBirthdateScreen from './lib/my/RegisterBirthdateScreen';
import RegisterGenderScreen from './lib/my/RegisterGenderScreen';
import { MemberProvider } from './contexts/MemberContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="MyScreen" 
      component={MyScreen} 
      options={{ title: '내 프로필' }} // MyScreen의 헤더 숨김
    />
    <Stack.Screen 
      name="RegisterName" 
      component={RegisterNameScreen} 
      options={{ title: '이름 등록' }} // RegisterName의 헤더 설정
    />
    <Stack.Screen 
      name="RegisterBirthdate" 
      component={RegisterBirthdateScreen} 
      options={{ title: '생년월일 등록' }} // 생년월일 등록 화면의 헤더 설정
    />
    <Stack.Screen 
      name="RegisterGender" 
      component={RegisterGenderScreen} 
      options={{ title: '성별 등록' }} // 성별 등록 화면의 헤더 설정
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
              component={NewsScreen} 
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