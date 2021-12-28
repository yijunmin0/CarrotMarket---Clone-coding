import React, {useState} from 'react';
import {StyleSheet, FlatList, View, Dimensions} from 'react-native';
import {HomeProductList} from '../components/homeProductList';
import {Product} from '../data/api';
import {makeProductList} from '../data/api';

const {width} = Dimensions.get('window');

export const Home = function () {
  const [productList, setProduectList] = useState<Product[]>(
    makeProductList(20),
  );
  const onEndReached = () => {
    const add = makeProductList(20);
    setProduectList(() => productList.concat(add));
  };
  const onRefresh = () => {
    setProduectList(() => makeProductList(20));
  };
  const [isRefreshing] = useState<boolean>(false);

  return (
    <View>
      <FlatList
        style={styles.flatList}
        data={productList}
        renderItem={({item}) => <HomeProductList product={item} />}
        keyExtractor={(item, _index) => String(item.id)}
        ItemSeparatorComponent={() => <View style={[styles.itemSeparator]} />}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.6}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        removeClippedSubviews={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    width: width,
    padding: 15,
  },
  itemSeparator: {borderWidth: 0.5, borderColor: 'lightgrey'},
});
