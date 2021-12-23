import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Product} from '../data/api';

export type ProductProps = {
  product: Product;
};

export const HomeProductList: FC<ProductProps> = ({product}) => {
  return (
    <View style={styles.flex}>
      <Image source={{uri: product.picture}} style={styles.image} />
      <Text>{product.picture}</Text>
      <Text>{product.title}</Text>
      <Text>{product.location}</Text>
      <Text>{product.price}$</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  image: {width: 200, height: 100},
});
