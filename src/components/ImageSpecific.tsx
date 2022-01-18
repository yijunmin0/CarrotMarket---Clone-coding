import React, {FC, useEffect} from 'react';
import {Button, Dimensions, StyleSheet, ViewProps} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';
import {View} from '../assets/styles/View';

interface ImageSpecificProps extends ViewProps {
  imageUrl: string;
  setImageSpecificShow: React.Dispatch<boolean>;
}

const {width, height} = Dimensions.get('window');

export const ImageSpecific: FC<ImageSpecificProps> = function ({
  imageUrl,
  style,
  setImageSpecificShow,
}) {
  const translateY = useSharedValue(0);
  const animtedView = useAnimatedStyle(() => {
    return {transform: [{translateY: translateY.value}]};
  });
  const animatedArroundView = useAnimatedStyle(() => {
    const opacity = interpolate(translateY.value, [-height, 0], [0, 1]);
    return {opacity: opacity};
  });
  useEffect(() => {
    translateY.value = -height;
    translateY.value = withTiming(0);
  });
  return (
    <Animated.View style={[styles.view, animtedView]}>
      <Animated.View style={[styles.topAroundView, animatedArroundView]}>
        {/* <Icon name="close" size={20} color="white" /> */}
      </Animated.View>
      <Animated.Image source={{uri: imageUrl}} style={styles.image} />
      <Animated.View style={[styles.bottomAroundView, animatedArroundView]}>
        <Button
          title="12312312312312321312321"
          onPress={() => setImageSpecificShow(false)}
        />
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: height,
    width: width,
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  image: {
    width: width,
    height: width,
    opacity: 1,
  },
  topAroundView: {flex: 1, width: width, backgroundColor: 'gray', opacity: 1},
  bottomAroundView: {
    flex: 1,
    width: width,
    backgroundColor: 'gray',
    opacity: 1,
  },
});
