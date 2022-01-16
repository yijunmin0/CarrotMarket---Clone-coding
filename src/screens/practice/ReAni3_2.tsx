//understanding context

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

type ContextType = {
  translateX: number;
  translateY: number;
};

export const ReAni3_2 = function () {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (_event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = context.translateX + event.translationX;
      translateY.value = context.translateY + event.translationY;
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
      <Header title="ReAni3_2" />
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
