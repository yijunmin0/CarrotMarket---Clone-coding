import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Home} from './src/screens/home';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {felx: 1, alignItems: 'center', justifyContent: 'center'},
});
