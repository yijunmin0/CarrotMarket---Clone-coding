import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {HomeProductList} from '../components/homeProductList';
import {Product} from '../data/api';
import {makeProductList} from '../data/api';
import {Header} from '../components/header';

export const Home = function () {
  const newProductList = function (num: number) {
    makeProductList(num).then(List => setProductList(List));
  };
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    newProductList(20);
  }, []);

  const onEndReached = () => {
    makeProductList(20).then(List =>
      setProductList(() => productList.concat(List)),
    );
  };
  const onRefresh = () => {
    newProductList(20);
  };
  const [isRefreshing] = useState<boolean>(false);

  return (
    <View style={styles.view}>
      <Header title="홈" />
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
  view: {flex: 1, backgroundColor: 'white'},
  flatList: {
    flex: 1,
    padding: 15,
  },
  itemSeparator: {borderWidth: 0.5, borderColor: 'lightgrey'},
});
