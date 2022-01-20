import {useIsFocused} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {
  Dimensions,
  StyleSheet,
  ViewProps,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/AntDesign';

interface ImageSpecificProps extends ViewProps {
  imageUrl: string;
  setImageSpecificShow: React.Dispatch<boolean>;
}

const {width, height} = Dimensions.get('window');

export const ImageSpecific: FC<ImageSpecificProps> = function ({
  imageUrl,
  setImageSpecificShow,
}) {
  const translateY = useSharedValue(0);
  const closeIcontranslateY = useSharedValue(0);
  const imagetranslateY = useSharedValue(0);
  const hideImageSpecific = function () {
    'worklet';
    setImageSpecificShow(false);
  };
  const panGestureHandler =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: event => {
        if (Math.abs(event.translationY) > 1) {
          closeIcontranslateY.value = withTiming(-100);
        }
        if (event.translationY > height / 3) {
          translateY.value = withTiming(height, {duration: 300}, result => {
            result ? runOnJS(setImageSpecificShow)(false) : null;
          });
        } else if (event.translationY < -height / 3) {
          translateY.value = withTiming(-height, {duration: 300}, result => {
            result ? runOnJS(setImageSpecificShow)(false) : null;
          });
        }
        imagetranslateY.value = event.translationY;
      },
      onEnd: event => {
        if (Math.abs(event.translationY) < height / 3) {
          imagetranslateY.value = withTiming(0, {
            duration: 100,
            easing: Easing.in(Easing.bounce),
          });
          closeIcontranslateY.value = withTiming(0);
        }
      },
    });
  const isFocused = useIsFocused();
  const animtedViewStyle = useAnimatedStyle(() => {
    return {transform: [{translateY: translateY.value}]};
  });
  const animatedArroundViewStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      Math.abs(imagetranslateY.value),
      [height, 0],
      [0, 1],
    );
    return {opacity: opacity};
  });
  const animatedImageStyle = useAnimatedStyle(() => {
    return {transform: [{translateY: imagetranslateY.value}]};
  });
  const animatedCloseIconStyle = useAnimatedStyle(() => {
    return {transform: [{translateY: closeIcontranslateY.value}]};
  });
  useEffect(() => {
    translateY.value = -height;
    translateY.value = withTiming(0, {duration: 300});
  });
  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);
  return (
    <PanGestureHandler onGestureEvent={panGestureHandler}>
      <Animated.View style={[styles.view, animtedViewStyle]}>
        {isFocused ? <StatusBar hidden={true} /> : null}
        <Animated.View style={[styles.aroundView, animatedArroundViewStyle]}>
          <AnimatedTouchableOpacity
            onPress={hideImageSpecific}
            style={[animatedCloseIconStyle]}>
            <Icon name="close" size={20} color="white" style={styles.icon} />
          </AnimatedTouchableOpacity>
        </Animated.View>
        <Animated.Image
          source={{uri: imageUrl}}
          style={[styles.image, animatedImageStyle]}
        />
      </Animated.View>
    </PanGestureHandler>
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
    position: 'absolute',
    alignSelf: 'center',
    top: height / 4,
    opacity: 1,
  },
  icon: {position: 'absolute', right: 20, top: 50},
  aroundView: {
    width: width,
    backgroundColor: 'black',
    opacity: 1,
    height: 3 * height,
  },
});
