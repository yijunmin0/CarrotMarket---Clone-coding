//https://www.youtube.com/watch?v=ru6KJ1bfZdg

import React, {useRef} from 'react';
import {Animated, StyleSheet, Dimensions} from 'react-native';
import {View} from '../../assets/styles/View';
import {Header} from '../../components/Header';

const CURSOR_SIDE_SIZE = 30;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

export const Practice1 = function () {
  const touch = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  console.log(touch);
  return (
    <View
      style={styles.view}
      onStartShouldSetResponder={() => true}
      onResponderMove={event => {
        touch.setValue({
          x: event.nativeEvent.locationX,
          y: event.nativeEvent.locationY,
        });
      }}
      onResponderRelease={() => {
        Animated.spring(touch, {
          toValue: {
            x: Dimensions.get('window').width / 2 - CURSOR_HALF_SIDE_SIZE,
            y: Dimensions.get('window').height / 2 - CURSOR_HALF_SIDE_SIZE,
          },
          // left/top are not supported
          useNativeDriver: false,
        }).start();
      }}>
      <Header title="Practice1" />
      <Animated.View
        style={{
          ...styles.cursor,
          left: Animated.subtract(touch.x, CURSOR_HALF_SIDE_SIZE),
          top: Animated.subtract(touch.y, CURSOR_HALF_SIDE_SIZE),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  cursor: {
    left: Dimensions.get('window').width / 2 - CURSOR_HALF_SIDE_SIZE,
    top: Dimensions.get('window').height / 2 - CURSOR_HALF_SIDE_SIZE,
    position: 'absolute',
    height: CURSOR_SIDE_SIZE,
    width: CURSOR_SIDE_SIZE,
    borderRadius: CURSOR_HALF_SIDE_SIZE,
    backgroundColor: 'orange',
  },
});
