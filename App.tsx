import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {BottomTabNavigation} from './src/navigations/BottomTabNavigation';
import {Login} from './src/screens/Login';
import {RootState} from './src/store/store';

export default function App() {
  const isLogin = useSelector((state: RootState) => state.user.isLogin);
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
