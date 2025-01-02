// RegisterNameScreen.tsx

import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { MemberContext } from '../contexts/MemberContext';

const RegisterNameScreen = ({ navigation }: { navigation: any }) => {
  const [name, setName] = useState('');
  const { addMember } = useContext(MemberContext)!;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>이름을 입력하세요:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Button
          title="다음"
          onPress={() => {
            navigation.navigate('RegisterBirthdate', { name });
          }}
          disabled={!name} // 이름이 입력되지 않으면 비활성화
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    width: '80%',
    paddingHorizontal: 10,
  },
});

export default RegisterNameScreen;
