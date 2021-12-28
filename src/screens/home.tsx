import React, {useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {HomeProductList} from '../components/homeProductList';
import {Product} from '../data/api';
import {makeProductList} from '../data/api';

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
    <View style={styles.flex}>
      <FlatList
        style={styles.flatList}
        data={productList}
        renderItem={({item}) => <HomeProductList product={item} />}
        keyExtractor={(item, _index) => String(item.id)}
        ItemSeparatorComponent={() => <View style={[styles.itemSeparator]} />}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={7}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        removeClippedSubviews={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  flatList: {
    flex: 1,
    padding: 15,
  },
  itemSeparator: {borderWidth: 0.5, borderColor: 'lightgrey'},
});
