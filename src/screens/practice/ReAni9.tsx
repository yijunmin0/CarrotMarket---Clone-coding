import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import {Carousel} from '../../components/Carousel';
import {randomImage} from '../../data/makeRandom';

const ImagUrls = [randomImage(), randomImage(), randomImage()];

export const ReAni9 = function () {
  console.log(ImagUrls);
  return (
    <SafeAreaView style={styles.view}>
      <Header title="ReAni9" />
      <Carousel imagUrls={ImagUrls} circleContainerY={-20} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
