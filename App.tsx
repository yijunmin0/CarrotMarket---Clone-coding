import React from 'react';
import {StyleSheet, View} from 'react-native';
import useUser from './src/hooks/useUser';
import {BottomTabNavigation} from './src/navigations/BottomTabNavigation';
import {Login} from './src/screens/Login';

export default function App() {
  const isLogin = useUser().isLogin;
  return (
    <View style={styles.areaView}>
      {isLogin ? <BottomTabNavigation /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
