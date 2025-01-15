// RegisterGenderScreen.tsx

import React, { useState, useContext } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { MemberContext } from '../../contexts/MemberContext';

const RegisterGenderScreen = ({ navigation, route }: { navigation: any; route: any }) => {
  const { name, birthdate } = route.params; // 이름과 생년월일 가져오기
  const [gender, setGender] = useState('');
  const { addMember } = useContext(MemberContext)!; // Context에서 addMember 가져오기

  const handleRegister = () => {
    const newMember = { name, birthdate, gender };
    addMember(newMember); // 회원 정보 등록
    navigation.reset({
      index: 0, // 상위 화면으로 돌아가면서 인덱스를 0으로 설정
      routes: [{ name: 'My' }], // 상위 화면으로 이동
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text>성별을 입력하세요:</Text>
        <Button title="남성" onPress={() => setGender('남성')} />
        <Button title="여성" onPress={() => setGender('여성')} />
        <Button
          title="완료"
          onPress={handleRegister}
          disabled={!gender} // 성별이 선택되지 않으면 비활성화
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

export default RegisterGenderScreen;