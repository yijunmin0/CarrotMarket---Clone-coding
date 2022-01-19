import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GoogleSignin} from 'react-native-google-login';

type UserInfoProps = Awaited<ReturnType<typeof GoogleSignin.signIn>>;

type User = {
  userInfo?: UserInfoProps;
};

const initialState: User = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserInfoProps>) {
      state.userInfo = action.payload;
    },
    logout(state) {
      state.userInfo = undefined;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
