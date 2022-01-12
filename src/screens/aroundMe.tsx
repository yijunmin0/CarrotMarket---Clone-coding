import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '../assets/styles/Text';
import {Header} from '../components/Header';
import {SafeAreaView} from '../assets/styles/SafeAreaView';

export const AroundMe = function () {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title={'내 주변'} />
      <Text>this is AroundMe</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
