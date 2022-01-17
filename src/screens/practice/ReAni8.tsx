//made logic - limitation of picker, internal picker change logic
//worklet

import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import {View} from '../../assets/styles/View';
import {ColorPicker} from '../../components/ColorPicker';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const COLORS = [
  'red',
  'purple',
  'blue',
  'cyan',
  'green',
  'yellow',
  'orange',
  'black',
  'white',
];

const BACKGROUND_COLOR = 'rgba(0,0,0,0.9)';
const width = Dimensions.get('window').width;

export const ReAni8 = function () {
  const pickedColor = useSharedValue<string | number>(COLORS[0]);
  const onColorChanged = (color: string | number) => {
    'worklet';
    pickedColor.value = color;
  };
  const bigCircleStyle = useAnimatedStyle(() => {
    return {backgroundColor: pickedColor.value};
  });
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="ReAni8" />
      <View style={styles.view}>
        <View style={styles.topContainer}>
          <Animated.View style={[styles.bigCircle, bigCircleStyle]} />
        </View>
        <View style={styles.bottomContainer}>
          <ColorPicker
            colors={COLORS}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.gradient}
            onColorChanged={onColorChanged}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {flex: 1},
  topContainer: {
    flex: 3,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    height: 40,
    width: width * 0.9,
    borderRadius: 20,
  },
  bigCircle: {
    height: width * 0.7,
    width: width * 0.7,
    borderRadius: width * 0.35,
  },
});
