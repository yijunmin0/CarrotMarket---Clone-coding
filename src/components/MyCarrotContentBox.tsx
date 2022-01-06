import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../assets/styles/View';

export const MyCarrotContentBox: FC = function (props) {
  return <View style={styles.view}>{props.children}</View>;
};

const styles = StyleSheet.create({
  view: {paddingHorizontal: 15, paddingVertical: 5, marginBottom: 5},
});
