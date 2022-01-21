import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {View} from '../assets/styles/View';
import {SafeAreaView} from '../assets/styles/SafeAreaView';
import {HomeProductList} from '../components/HomeProductList';
import {Movie} from '../data/api';
import {Header} from '../components/Header';
import {API_KEY, API_URL} from '../config';

export const Home = function () {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const getMovies = function (_page: number) {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${_page}`;
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        setMovieList(() => movieList.concat(res.results));
        setPage(prev => prev + 1);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getMovies(page);
  }, []);

  const onEndReached = () => {
    getMovies(page);
  };
  const onRefresh = () => {
    const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    fetch(endpoint)
      .then(res => res.json())
      .then(res => {
        setMovieList(res.results);
        setPage(2);
      });
  };
  const [isRefreshing] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="홈" />
      <FlatList
        style={styles.flatList}
        data={movieList}
        renderItem={({item}) => <HomeProductList movie={item} />}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  flatList: {
    flex: 1,
    padding: 15,
  },
  itemSeparator: {borderWidth: 0.5, borderColor: 'lightgrey'},
});
