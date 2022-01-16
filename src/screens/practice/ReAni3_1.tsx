//use PanGesuteHandler, useAnimatedGestureHandler, understatding types

import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {View} from '../../assets/styles/View';

export const ReAni3_1 = function () {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: event => {
        translateX.value = event.translationX;
        translateY.value = event.translationY;
      },
      onEnd: () => {},
    });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  });
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="ReAni3_1" />
      <View style={styles.view}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
          <Animated.View style={[styles.redSquare, animatedStyle]} />
        </PanGestureHandler>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  redSquare: {height: 100, width: 100, backgroundColor: 'red'},
});
