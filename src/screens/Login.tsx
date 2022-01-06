import React from 'react';
import {
  GoogleSigninButton,
  statusCodes,
  GoogleSignin,
} from 'react-native-google-login';

export const Login = function ({setIsLogin}) {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setIsLogin(true);
    } catch (error) {
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
