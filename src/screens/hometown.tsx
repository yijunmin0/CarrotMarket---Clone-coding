import React from 'react';
import {Text} from 'react-native';
import {View, StyleSheet} from 'react-native';
import {Header} from '../components/header';

export const HomeTown = function () {
  return (
    <View style={styles.view}>
      <Header title={'동네생활'} />
      <Text>this is HomeTown</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
});
