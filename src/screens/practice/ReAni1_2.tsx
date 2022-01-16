import React, {useEffect} from 'react';
import {Button, StyleSheet, Dimensions} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';

export const ReAni1_2 = function () {
  const width = Dimensions.get('window').width;
  const translation = useSharedValue(0);
  const changeTranlation = () => {
    'worklet';
    translation.value = withSpring(Math.random());
  };
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     for (let i = 0; i < 100000000; i++);
  //   }, 0);
  //   return () => clearInterval(id);
  // }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: translation.value * width,
    };
  });

  return (
    <SafeAreaView style={styles.view}>
      <Header title="ReAni1_2" />
      <Animated.View style={[styles.redSquare, animatedStyle]} />
      <Button title="changeWidth" onPress={changeTranlation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  redSquare: {height: 100, backgroundColor: 'red'},
});
