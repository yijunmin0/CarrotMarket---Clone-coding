import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';

export const Practice4 = function () {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 300,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, [translation]);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Practice4" />
      <Animated.View
        style={{
          ...styles.squareBox,
          transform: [
            {translateX: translation},
            {
              rotateX: translation.interpolate({
                inputRange: [0, 300],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
          opacity: translation.interpolate({
            inputRange: [0, 300],
            outputRange: [1, 0],
          }),
          backgroundColor: translation.interpolate({
            inputRange: [0, 300],
            outputRange: ['orange', 'purple'],
          }),
        }}
      />
      <Animated.View
        style={{
          ...styles.squareBox,
          transform: [
            {translateX: translation},
            {
              rotateY: translation.interpolate({
                inputRange: [0, 300],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
          opacity: translation.interpolate({
            inputRange: [0, 300],
            outputRange: [1, 0],
          }),
          backgroundColor: translation.interpolate({
            inputRange: [0, 300],
            outputRange: ['orange', 'purple'],
          }),
        }}
      />
      <Animated.View
        style={{
          ...styles.squareBox,
          transform: [
            {translateX: translation},
            {
              rotateZ: translation.interpolate({
                inputRange: [0, 300],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
          opacity: translation.interpolate({
            inputRange: [0, 300],
            outputRange: [1, 0],
          }),
          backgroundColor: translation.interpolate({
            inputRange: [0, 300],
            outputRange: ['orange', 'purple'],
          }),
        }}
      />
      <Animated.View
        style={{
          ...styles.squareBox,
          transform: [
            {translateX: translation},
            {
              scale: translation.interpolate({
                inputRange: [0, 150, 300],
                outputRange: [0, 2, 0],
              }),
            },
          ],
          opacity: translation.interpolate({
            inputRange: [0, 300],
            outputRange: [1, 0],
          }),
          backgroundColor: translation.interpolate({
            inputRange: [0, 300],
            outputRange: ['orange', 'purple'],
          }),
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  squareBox: {width: 100, height: 100, backgroundColor: 'orange'},
});
