import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../components/View';
import {Text} from '../components/Text';
import {Header} from '../components/Header';

export const AroundMe = function () {
  return (
    <View style={styles.view}>
      <Header title={'내 주변'} />
      <Text>this is AroundMe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
