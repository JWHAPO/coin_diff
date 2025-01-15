// RegisterBirthdateScreen.tsx

import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { MemberContext } from '../../contexts/MemberContext';

const RegisterBirthdateScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const { name } = route.params; // 이름을 route.params에서 가져옵니다.
  const [birthdate, setBirthdate] = useState('');
  const { addMember } = useContext(MemberContext)!; // Context에서 addMember 가져오기

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>생년월일을 입력하세요:</Text>
        <TextInput
          style={styles.input}
          value={birthdate}
          onChangeText={setBirthdate}
        />
        <Button
          title="다음"
          onPress={() => {
            navigation.navigate('RegisterGender', { name, birthdate, addMember });
          }}
          disabled={!birthdate} // 생년월일이 입력되지 않으면 비활성화
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

export default RegisterBirthdateScreen;