//use switch component, toggle concept
//toggle change process 0 <-> 1 then interpolate
//only center problem

import React, {useState} from 'react';
import {StyleSheet, Switch} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const circleSize = 200;

const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    background: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256, 0, 256, 0.2)',
  false: 'rgba(0,0,0,0.1)',
};

type Theme = 'light' | 'dark';

export const ReAni5 = function () {
  const [theme, setTheme] = useState<Theme>('light');
  const progress = useDerivedValue(() => {
    return theme === 'dark'
      ? withTiming(1, {duration: 300})
      : withTiming(0, {duration: 300});
  }, [theme]);
  const backgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background],
    );
    return {
      backgroundColor: backgroundColor,
    };
  });
  const circleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle],
    );
    return {
      backgroundColor: backgroundColor,
    };
  });

  const textStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.text, Colors.dark.text],
    );
    return {color: color};
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="ReAni5" />
      <Animated.View style={[styles.view, backgroundStyle]}>
        <Animated.Text style={[styles.text, textStyle]}>THEME</Animated.Text>
        <Animated.View style={[styles.circle, circleStyle]}>
          <Switch
            value={theme === 'dark'}
            onValueChange={toggle => {
              setTheme(toggle ? 'dark' : 'light');
            }}
            trackColor={SWITCH_TRACK_COLOR}
            thumbColor={'violet'}
          />
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  circle: {
    height: circleSize,
    width: circleSize,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: circleSize / 2,
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 8,
  },
  text: {
    marginBottom: 20,
    fontSize: 60,
    fontWeight: '600',
  },
});
