import React from 'react';
import {StyleSheet} from 'react-native';
import {Image, Text} from 'react-native';
import {View} from 'react-native';
import {ProductSpecificProps} from '../navigations/homeStack';

export const ProductSpecific = function ({route}: ProductSpecificProps) {
  const {id, picture, price, title, location} = route.params;
  return (
    <View style={styles.view}>
      <Text>this is ProductSpecific</Text>
      <Image source={{uri: picture}} style={styles.image} />
      <Text>{id}</Text>
      <Text>{price}</Text>
      <Text>{title}</Text>
      <Text>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  image: {flex: 1},
});
