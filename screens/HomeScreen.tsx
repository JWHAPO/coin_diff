// HomeScreen.tsx

import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>홈 화면</Text>
        <Button
          title="상세 화면 1로 이동"
          onPress={() => navigation.navigate('Details', { detail: '1' })}
        />
        <Button
          title="상세 화면 2로 이동"
          onPress={() => navigation.navigate('Details', { detail: '2' })}
        />
        <Button
          title="상세 화면 3로 이동"
          onPress={() => navigation.navigate('Details', { detail: '3' })}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
