// MyScreenStack.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyScreen from './MyScreen';
import RegisterNameScreen from './RegisterNameScreen';
import RegisterBirthdateScreen from './RegisterBirthdateScreen';
import RegisterGenderScreen from './RegisterGenderScreen';

const Stack = createStackNavigator();

const MyScreenStack = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="MyScreen" 
      component={MyScreen} 
      options={{ title: '내 프로필' }} 
    />
    <Stack.Screen 
      name="RegisterName" 
      component={RegisterNameScreen} 
      options={{ title: '이름 등록' }} 
    />
    <Stack.Screen 
      name="RegisterBirthdate" 
      component={RegisterBirthdateScreen} 
      options={{ title: '생년월일 등록' }} 
    />
    <Stack.Screen 
      name="RegisterGender" 
      component={RegisterGenderScreen} 
      options={{ title: '성별 등록' }} 
    />
  </Stack.Navigator>
);

export default MyScreenStack;
