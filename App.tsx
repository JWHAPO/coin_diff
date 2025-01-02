/**
 * Coin Diff React Native App
 * Authors : LYJ, CJY, PJH, KJW
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import RegisterNameScreen from './screens/RegisterNameScreen';
import RegisterBirthdateScreen from './screens/RegisterBirthdateScreen';
import RegisterGenderScreen from './screens/RegisterGenderScreen';
import { MemberProvider } from './contexts/MemberContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <MemberProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="RegisterName" component={RegisterNameScreen} />
            <Stack.Screen name="RegisterBirthdate" component={RegisterBirthdateScreen} />
            <Stack.Screen name="RegisterGender" component={RegisterGenderScreen} />
          </Stack.Navigator>
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
