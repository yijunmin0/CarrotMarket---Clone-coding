import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {View} from '../../assets/styles/View';

export const Practice2 = function () {
  return (
    <View style={styles.view}>
      <Header title="Practice1" />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
