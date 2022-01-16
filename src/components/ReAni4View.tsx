import React from 'react';
import {FC} from 'react';
import {LayoutRectangle, StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {View} from '../assets/styles/View';

type ReAni4View = {
  title: string;
  index: number;
  layout: LayoutRectangle;
  translateX: Animated.SharedValue<number>;
};

export const ReAni4View: FC<ReAni4View> = function ({
  title,
  index,
  layout,
  translateX,
}) {
  const SquareSize = layout.width * 0.7;
  const inputRange = [
    (index - 1) * layout.width,
    index * layout.width,
    (index + 1) * layout.width,
  ];
  const animatedStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const borderRadius = interpolate(translateX.value, inputRange, [
      0,
      SquareSize / 2,
      0,
    ]);

    return {
      borderRadius: borderRadius,
      transform: [{scale: scale}],
    };
  });
  const textStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      inputRange,
      [layout.height / 2, 0, -layout.height / 2],
      Extrapolate.CLAMP,
    );
    const opacity = interpolate(
      translateX.value,
      inputRange,
      [-0.5, 1, -0.5],
      Extrapolate.CLAMP,
    );
    return {
      transform: [{translateY: translateY}],
      opacity: opacity,
    };
  });
  return (
    <View
      style={[
        styles.view,
        {
          backgroundColor: `rgba(0,0,256, 0.${index + 2})`,
          width: layout.width,
        },
      ]}>
      <Animated.View
        style={[
          styles.square,
          animatedStyle,
          {
            width: SquareSize,
            height: SquareSize,
          },
        ]}
      />
      <Animated.Text style={[styles.text, textStyle]}>{title}</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {alignItems: 'center', justifyContent: 'center'},
  square: {backgroundColor: 'rgba(0,0,256, 0.5)'},
  text: {
    position: 'absolute',
    fontSize: 40,
    fontWeight: '700',
    color: 'white',
    textTransform: 'uppercase',
  },
});
