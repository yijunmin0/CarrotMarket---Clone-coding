//using fun logic

import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {View} from '../../assets/styles/View';

type ContextType = {
  translateX: number;
  translateY: number;
  absoluteX: number;
  absoluteY: number;
};

const squareSize = 100;
const circleSize = 300;

export const ReAni3_3 = function () {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
      context.absoluteX = event.absoluteX;
      context.absoluteY = event.absoluteY;
    },
    onActive: (event, context) => {
      translateX.value = context.translateX + event.translationX;
      translateY.value = context.translateY + event.translationY;
    },
    onEnd: (event, context) => {
      const distance =
        ((event.absoluteX - context.absoluteX) ** 2 +
          (event.absoluteY - context.absoluteY) ** 2) **
        0.5;
      if (distance < circleSize / 2 + squareSize / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
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
      <Header title="ReAni3_3" />
      <View style={styles.view}>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View style={[styles.redSquare, animatedStyle]} />
          </PanGestureHandler>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  redSquare: {
    height: squareSize,
    width: squareSize,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: circleSize / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
