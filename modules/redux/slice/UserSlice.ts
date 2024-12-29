import {createSlice} from '@reduxjs/toolkit';
import {User} from '../../../types/users/UserType';

const initialState: User = {
  id: '@',
  nickName: '',
  phoneNumber: '',
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.nickName = action.payload.nickName;
      state.phoneNumber = action.payload.phoneNumber;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    setNickName(state, action) {
      state.nickName = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
  },
});

export const {setUser, setId, setNickName, setPhoneNumber} = UserSlice.actions;

export default UserSlice.reducer;
