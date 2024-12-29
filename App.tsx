/**
 * Coin Diff React Native App
 * Authors : LYJ, CJY, PJH, KJW
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text, View} from 'react-native';
import {RootState} from './modules/redux/RootReducer';
import {useDispatch, useSelector} from 'react-redux';
import {setNickName} from './modules/redux/slice/UserSlice';

function App(): React.JSX.Element {
  const dispatch = useDispatch();

  const setUserInfo = () => {
    dispatch(setNickName('sample'));
    // console.log("result :: ", result)
  };

  const userInfo = useSelector((state: RootState) => state.user);

  return (
    <SafeAreaView>
      <View>
        <Button title="button" onPress={() => setUserInfo} />
        <Button title="button" onPress={() => console.log(userInfo.nickName)} />
        <Text>{userInfo.nickName}</Text>
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
});

export default App;
