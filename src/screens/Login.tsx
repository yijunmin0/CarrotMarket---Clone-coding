import React from 'react';
import {
  GoogleSigninButton,
  statusCodes,
  GoogleSignin,
} from 'react-native-google-login';
import {useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {login} from '../store/userSlice';

type Error = {
  code: string;
};

export const Login = function () {
  const dispatch = useDispatch();
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.idToken;
      dispatch(login(userInfo));
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      return auth().signInWithCredential(googleCredential);
    } catch (e: unknown) {
      const error = e as Error;
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
  return (
    <GoogleSigninButton
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: 192, height: 48}}
      size={GoogleSigninButton.Size.Wide}
      onPress={signIn}
    />
  );
};
