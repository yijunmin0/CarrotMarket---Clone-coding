import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Dimensions} from 'react-native';
import {HomeProductList} from '../components/homeProductList';
import {Product} from '../data/api';
import {makeProductList} from '../data/api';

const {width} = Dimensions.get('window');

export const Home = function () {
  const [productList] = useState<Product[]>(makeProductList(10));
  return (
    <View>
      <FlatList
        style={styles.flatList}
        data={productList}
        renderItem={({item}) => <HomeProductList product={item} />}
        keyExtractor={(item, _index) => String(item.id)}
        ItemSeparatorComponent={() => <View style={[styles.itemSeparator]} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: width,
  },
  itemSeparator: {borderWidth: 1, borderColor: 'black'},
});
