import React from 'react';
import {FC} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

type CarouselCircle = {
  index: number;
  translateX: Animated.SharedValue<number>;
  imageWidth: number;
};

export const CarouselCircle: FC<CarouselCircle> = function ({
  translateX,
  index,
  imageWidth,
}) {
  const circleStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      translateX.value,
      [imageWidth * (index - 1), imageWidth * index, imageWidth * (index + 1)],
      [0.25, 0.75, 0.25],
      Extrapolate.CLAMP,
    );
    const width = interpolate(
      translateX.value,
      [imageWidth * (index - 1), imageWidth * index, imageWidth * (index + 1)],
      [10, 15, 10],
      Extrapolate.CLAMP,
    );
    return {opacity: opacity, width: width};
  });
  return <Animated.View style={[styles.circle, circleStyle]} />;
};

const styles = StyleSheet.create({
  circle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'lightgray',
    marginHorizontal: 2,
  },
});
