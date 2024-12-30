// DetailsScreen.tsx

import React from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { detail } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>상세 화면 {detail}의 내용</Text>
        <View style={styles.buttonContainer}>
          <Button title="홈으로 돌아가기" onPress={() => navigation.goBack()} />
        </View>
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
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});

export default DetailsScreen;
