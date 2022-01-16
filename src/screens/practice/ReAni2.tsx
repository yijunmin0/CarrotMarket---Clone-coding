//use & understand useShared Value, useAnimatedStyle, withTiming, withRepeat

import React, {useEffect} from 'react';
import {View} from '../../assets/styles/View';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

export const ReAni2 = function () {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const borderRadius = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{scale: scale.value}],
      borderRadius: borderRadius.value * 100,
    };
  });
  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.5, {duration: 2000}), -1, true);
    scale.value = withRepeat(
      withTiming(2, {
        duration: 2000,
      }),
      -1,
      true,
    );
    borderRadius.value = withRepeat(
      withTiming(1, {
        duration: 2000,
      }),
      -1,
      true,
    );
  });
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="ReAni2" />
      <View style={styles.view}>
        <Animated.View style={[styles.redSquare, animatedStyle]} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  redSquare: {height: 100, width: 100, backgroundColor: 'red'},
});
