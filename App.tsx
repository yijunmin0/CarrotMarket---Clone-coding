import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {BottomTabNavigation} from './src/navigations/bottomTabNavigation';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <BottomTabNavigation />
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
