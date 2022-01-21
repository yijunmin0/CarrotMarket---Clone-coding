import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {SafeAreaView} from '../assets/styles/SafeAreaView';
import {API_KEY, API_URL} from '../config';

export const GetMovies = function () {
  useEffect(() => {
    function getMovieList() {
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      fetch(endpoint)
        .then(res => res.json())
        .then(res => console.log(res.results))
        .catch(error => console.log(error));
    }
    console.log(getMovieList());
  });
  return (
    <SafeAreaView style={styles.view}>
      <Header title="GetMovies" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
