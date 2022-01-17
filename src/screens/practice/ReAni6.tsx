//use Pinch Gesture Handler

import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import {randomImage} from '../../data/makeRandom';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {View} from '../../assets/styles/View';

const imageUrl = randomImage();

export const ReAni6 = function () {
  const scale = useSharedValue(1);
  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: event => {
        scale.value = event.scale;
        console.log(event);
      },
      onEnd: () => {
        scale.value = withTiming(1);
      },
    });
  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="ReAni6" />
      <View style={styles.view}>
        <PinchGestureHandler onGestureEvent={pinchHandler}>
          <Animated.Image
            source={{uri: imageUrl}}
            style={[styles.image, imageStyle]}
          />
        </PinchGestureHandler>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {flex: 1},
  image: {flex: 1},
});
