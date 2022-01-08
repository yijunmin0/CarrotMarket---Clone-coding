import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import useUser from './src/hooks/useUser';
import {BottomTabNavigation} from './src/navigations/BottomTabNavigation';
import {Login} from './src/screens/Login';

export default function App() {
  const isLogin = useUser().isLogin;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {isLogin ? <BottomTabNavigation /> : <Login />}
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
