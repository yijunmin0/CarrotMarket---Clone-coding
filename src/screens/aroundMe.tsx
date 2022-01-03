import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {Header} from '../components/header';

export const AroundMe = function () {
  return (
    <View style={styles.view}>
      <Header title={'내 주변'} />
      <Text>this is AroundMe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
});
