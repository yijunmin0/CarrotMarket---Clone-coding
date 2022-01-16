import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';

export const ReAni3 = function () {
  return (
    <SafeAreaView style={styles.view}>
      <Header title="ReAni3" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
