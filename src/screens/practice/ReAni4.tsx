//use interpolate, useAnimatedScrollHandler
//make useLayoutHooks

import React from 'react';
import {StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {ReAni4View} from '../../components/ReAni4View';
import {useLayout} from '../../hooks/useLayout';

const WORDS = ["I'm", 'A', 'front-end', 'Developer'];

export const ReAni4 = function () {
  const translateX = useSharedValue(0);
  const [layout, setLayout] = useLayout();
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });
  return (
    <SafeAreaView style={styles.view}>
      <Header title="ReAni4" />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        onLayout={setLayout}
        horizontal
        pagingEnabled>
        {WORDS.map((title, index) => {
          return (
            <ReAni4View
              index={index}
              title={title}
              layout={layout}
              translateX={translateX}
              key={title}
            />
          );
        })}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
