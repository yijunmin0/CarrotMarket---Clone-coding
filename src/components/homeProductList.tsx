import React, {FC} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Product} from '../data/api';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Props} from '../navigations/homeStack';
import {useNavigation} from '@react-navigation/native';

export type ProductProps = {
  product: Product;
};

export const HomeProductList: FC<ProductProps> = ({product}) => {
  const navigation = useNavigation<Props['navigation']>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductSpecific', {...product});
      }}>
      <View style={styles.view}>
        <View style={styles.leftContents}>
          <Image
            source={{uri: product.picture, cache: 'reload'}}
            style={styles.image}
          />
        </View>
        <View style={styles.rightContents}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.location}>location : {product.location}</Text>
          <Text style={styles.price}>{product.price}$</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, flexDirection: 'row', padding: 10},
  leftContents: {flex: 1},
  rightContents: {flex: 2, marginLeft: 5},
  image: {height: 100, resizeMode: 'cover', borderRadius: 10},
  title: {fontSize: 15, fontWeight: '400', marginBottom: 8},
  location: {fontSize: 10, fontWeight: '400', marginBottom: 8},
  price: {fontSize: 15, fontWeight: '600'},
});
