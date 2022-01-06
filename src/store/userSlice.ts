import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {GoogleSignin} from 'react-native-google-login';

type UserInfoProps = Awaited<ReturnType<typeof GoogleSignin.signIn>>;

type User = {
  isLogin: boolean;
  userInfo?: UserInfoProps;
};

const initialState: User = {isLogin: false};

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserInfoProps>) {
      state.isLogin = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isLogin = true;
      state.userInfo = undefined;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
