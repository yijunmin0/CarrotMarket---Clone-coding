import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {BottomTabNavigation} from './src/navigations/BottomTabNavigation';
import {Login} from './src/screens/Login';
import {GoogleSignin} from 'react-native-google-login';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '830365779155-bgh3c2lik69os37s9con6duhbsosklq7.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {isLogin ? <BottomTabNavigation /> : <Login setIsLogin={setIsLogin} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
