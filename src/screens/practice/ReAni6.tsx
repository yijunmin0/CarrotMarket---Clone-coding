import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';

export const ReAni6 = function () {
  return (
    <SafeAreaView style={styles.view}>
      <Header title="Practice1" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
