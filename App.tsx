/**
 * Coin Diff React Native App
 * Authors : LYJ, CJY, PJH, KJW
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  View,
  TextInput,
} from 'react-native';
import {RootState} from './modules/redux/RootReducer';
import {useDispatch, useSelector} from 'react-redux';
import {setNickName, setUser} from './modules/redux/slice/UserSlice';
import {User} from './types/users/UserType';

function App(): React.JSX.Element {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) => state.user);

  const setUserInfo = () => {
    const userInfo: User = {
      id: '123',
      nickName: text,
      phoneNumber: '010-1234-5678',
    };

    const result = dispatch(setUser(userInfo));
  };

  function checkUserInfo() {
    setNickName(userInfo.nickName);
  }

  const [text, setText] = React.useState('');
  const [nickName, setNickName] = React.useState('');

  return (
    <SafeAreaView>
      <View>
        <TextInput style={styles.input} onChangeText={setText} value={text} />
        <Button title="닉네임 저장하기" onPress={setUserInfo} />
        <Text>{nickName}</Text>
        <Button title="닉네임 확인하기" onPress={checkUserInfo} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
