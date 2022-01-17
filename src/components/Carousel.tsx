import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {View} from '../assets/styles/View';
import {useLayout} from '../hooks/useLayout';
import {CarouselCircle} from './CarouselCircle';

type CaroselImags = {
  imagUrls: string[];
  circleContainerY: number;
};

export const Carousel: FC<CaroselImags> = function ({
  imagUrls,
  circleContainerY,
}) {
  const [layout, setLayout] = useLayout();
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <View>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onLayout={setLayout}>
        {imagUrls.map((img, index) => {
          return (
            <Animated.Image
              source={{uri: img}}
              style={[{width: layout.width, height: layout.width}]}
              key={index}
            />
          );
        })}
      </Animated.ScrollView>
      <View style={[styles.circleContainer, {top: circleContainerY}]}>
        {imagUrls.map((_, index) => {
          return (
            <CarouselCircle
              translateX={translateX}
              index={index}
              key={index}
              imageWidth={layout.width}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
