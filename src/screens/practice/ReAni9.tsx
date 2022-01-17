import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';

export const ReAni9 = function () {
  return (
    <SafeAreaView style={styles.view}>
      <Header title="ReAni9" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
