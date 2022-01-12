import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated} from 'react-native';
import {Header} from '../../components/Header';
import {View} from '../../assets/styles/View';

export const Practice4 = function () {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [translation]);
  return (
    <View style={styles.view}>
      <Header title="Practice4" />
      <Animated.View
        style={{
          ...styles.squareBox,
          transform: [
            {translateX: translation},
            {
              rotate: translation.interpolate({
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
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  squareBox: {width: 100, height: 100, backgroundColor: 'orange'},
});
