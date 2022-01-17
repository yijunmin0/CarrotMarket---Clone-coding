import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {useLayout} from '../hooks/useLayout';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

interface ColorPickers extends LinearGradientProps {
  onColorChanged: (color: string | number) => void;
}
type pickerX = {x: number};

export const ColorPicker: FC<ColorPickers> = ({
  colors,
  start,
  end,
  style,
  onColorChanged,
}) => {
  const [layout, setLayout] = useLayout();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const adjustedTranslateX = useDerivedValue(() => {
    return translateX.value >= 0
      ? Math.min(translateX.value, layout.width / 2 - PICKER_SIZE / 2)
      : Math.max(translateX.value, -layout.width / 2 + PICKER_SIZE / 2);
  });
  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    pickerX
  >({
    onStart: (_, current) => {
      current.x = translateX.value;
      translateY.value = withTiming(-PICKER_SIZE);
      scale.value = 1.1;
    },
    onActive: (event, current) => {
      translateX.value = current.x + event.translationX;
    },
    onEnd: () => {
      translateY.value = withTiming(0);
      scale.value = 1;
    },
  });
  const pickerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: adjustedTranslateX.value},
        {translateY: translateY.value},
        {scale: scale.value},
      ],
    };
  });
  const internalPickerStyle = useAnimatedStyle(() => {
    const intervalLength = layout.width / colors.length;
    const inputArray: number[] = new Array(9).fill(0).map((_, index) => {
      return -layout.width / 2 + intervalLength * index;
    });

    const innerColor = interpolateColor(translateX.value, inputArray, colors);
    onColorChanged(innerColor);
    return {backgroundColor: innerColor};
  });
  return (
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={styles.view}>
        <LinearGradient
          colors={colors}
          start={start}
          end={end}
          style={style}
          onLayout={setLayout}
        />
        <Animated.View style={[styles.picker, pickerStyle]}>
          <Animated.View style={[styles.interanlPicker, internalPickerStyle]} />
        </Animated.View>
      </Animated.View>
    </PanGestureHandler>
  );
};

const PICKER_SIZE = 45;
const INTERNAL_PICKER_SIZE = PICKER_SIZE / 2;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    position: 'absolute',
    backgroundColor: 'white',
    width: PICKER_SIZE,
    height: PICKER_SIZE,
    borderRadius: PICKER_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  interanlPicker: {
    width: INTERNAL_PICKER_SIZE,
    height: INTERNAL_PICKER_SIZE,
    borderRadius: INTERNAL_PICKER_SIZE / 2,
    borderWidth: 1.0,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});
