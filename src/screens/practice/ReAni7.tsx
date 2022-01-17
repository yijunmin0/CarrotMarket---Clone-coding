//use tabgesturehandler, tap, doubletap callback fucntion, withDelay
//loading Img Animation

import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import {randomImage} from '../../data/makeRandom';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withDelay,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
import {Dimensions} from 'react-native';
import {View} from '../../assets/styles/View';
import {TapGestureHandler} from 'react-native-gesture-handler';
import {useRef} from 'react';
import {useCallback} from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import {Colors} from 'react-native-paper';

const imageUrl = randomImage();
const width = Dimensions.get('window').width;

export const ReAni7 = function () {
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);
  const loadingImgOpacity = useSharedValue(0.25);
  const doubleTapRef = useRef();
  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });
  const textStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });
  const loadingImgStyle = useAnimatedStyle(() => {
    return {opacity: loadingImgOpacity.value};
  });
  const onSingleTap = useCallback(() => {
    opacity.value = withTiming(1, undefined, isFinished => {
      if (isFinished) {
        opacity.value = withTiming(0);
      }
    });
  }, [opacity]);
  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, [scale]);
  useEffect(() => {
    !onLoad &&
      (loadingImgOpacity.value = withRepeat(
        withTiming(0.75, {duration: 1000}),
        -1,
        true,
      ));
  });
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="ReAni7" />
      <View style={styles.view}>
        <Animated.Text style={[styles.text, textStyle]}>
          Double tap{'\n'} to like
        </Animated.Text>
        <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
          <TapGestureHandler
            maxDelayMs={300}
            ref={doubleTapRef}
            numberOfTaps={2}
            onActivated={onDoubleTap}>
            <Animated.View>
              <ImageBackground
                onLoad={() => setOnLoad(true)}
                source={{uri: imageUrl}}
                style={styles.backgroundImage}>
                <Animated.Image
                  source={require('../../assets/images/heart.png')}
                  resizeMode="center"
                  style={[styles.image, imageStyle]}
                />
              </ImageBackground>

              {!onLoad && (
                <Animated.View style={[styles.loadingImg, loadingImgStyle]} />
              )}
            </Animated.View>
          </TapGestureHandler>
        </TapGestureHandler>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  view: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  backgroundImage: {
    width: width,
    height: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    shadowOffset: {width: 0, height: 20},
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  text: {
    left: 0,
    right: 0,
    top: 10,
    position: 'absolute',
    fontSize: 50,
    fontWeight: '500',
    zIndex: 3,
    textAlign: 'center',
  },
  loadingImg: {
    flex: 1,
    width: width,
    height: width,
    backgroundColor: Colors.grey500,
    position: 'absolute',
  },
});
