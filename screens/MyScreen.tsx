// MyScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>내 정보 화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyScreen;
