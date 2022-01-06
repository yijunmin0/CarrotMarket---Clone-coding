import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {View} from '../assets/styles/View';
import {Text} from '../assets/styles/Text';

export const HomeTown = function () {
  return (
    <View style={styles.view}>
      <Header title={'동네생활'} />
      <Text>this is HomeTown</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
