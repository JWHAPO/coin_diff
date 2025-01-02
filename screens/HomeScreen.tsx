// HomeScreen.tsx

import React, { useContext } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { MemberContext } from '../contexts/MemberContext';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { members, addMember } = useContext(MemberContext)!;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>회원 정보 목록</Text>
        <FlatList
          data={members}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text>{item.name} - {item.birthdate} - {item.gender}</Text>
          )}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="회원 정보 신규 등록"
            onPress={() => navigation.navigate('RegisterName')}
          />
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

export default HomeScreen;
