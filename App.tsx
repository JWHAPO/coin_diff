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
import HomeScreen from './screens/HomeScreen';
import NewsScreen from './screens/NewsScreen';
import MyScreen from './screens/MyScreen';
import RegisterNameScreen from './screens/RegisterNameScreen';
import RegisterBirthdateScreen from './screens/RegisterBirthdateScreen';
import RegisterGenderScreen from './screens/RegisterGenderScreen';
import { MemberProvider } from './contexts/MemberContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="HomeScreen" // 이름 변경
      component={HomeScreen} 
      options={{ headerShown: false }}
    />
    <Stack.Screen name="RegisterName" component={RegisterNameScreen} />
    <Stack.Screen name="RegisterBirthdate" component={RegisterBirthdateScreen} />
    <Stack.Screen name="RegisterGender" component={RegisterGenderScreen} />
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
              component={HomeStack} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="home-outline" color={color} size={size} />
                ),
              }} 
            />
            <Tab.Screen 
              name="News" 
              component={NewsScreen} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="newspaper-outline" color={color} size={size} />
                ),
              }} 
            />
            <Tab.Screen 
              name="My" 
              component={MyScreen} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Icon name="person-outline" color={color} size={size} />
                ),
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