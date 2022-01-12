import React, {useRef} from 'react';
import {Animated, StyleSheet, Dimensions} from 'react-native';
import {Header} from '../../components/Header';

const CURSOR_SIDE_SIZE = 30;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

export const Practice1 = function () {
  console.log(new Error().stack);
  const touch = useRef(
    new Animated.ValueXY({
      x: Dimensions.get('window').width / 2,
      y: Dimensions.get('window').height / 2,
    }),
  ).current;
  console.log(touch);
  return (
    <Animated.View
      style={styles.view}
      onStartShouldSetResponder={() => {
        console.log(1);
        return true;
      }}
      onResponderRelease={() => {
        Animated.spring(touch, {
          toValue: {
            x: Dimensions.get('window').width / 2,
            y: Dimensions.get('window').height / 2,
          },
          // left/top are not supported
          useNativeDriver: false,
        }).start();
      }}
      onResponderMove={event => {
        touch.setValue({
          x: event.nativeEvent.pageX,
          y: event.nativeEvent.pageY - 50,
        });
        console.log('move', event.nativeEvent.pageY);
      }}>
      <Header title="Practice1" />
      <Animated.View
        style={{
          ...styles.cursor,
          left: Animated.subtract(touch.x, CURSOR_HALF_SIDE_SIZE),
          top: Animated.subtract(touch.y, CURSOR_HALF_SIDE_SIZE),
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
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
