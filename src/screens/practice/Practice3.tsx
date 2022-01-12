import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated} from 'react-native';
import {Header} from '../../components/Header';
import {View} from '../../assets/styles/View';

export const Practice3 = function () {
  const translation1 = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const translation2 = useRef(new Animated.ValueXY({x: 0, y: 100})).current;
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.spring(translation1.x, {
          toValue: 100,
          useNativeDriver: true,
        }),
        Animated.spring(translation1.y, {
          toValue: 100,
          useNativeDriver: true,
        }),
        Animated.spring(translation1.x, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(translation1.y, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, 500);
  }, [translation1.x, translation1.y]);

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.parallel([
          Animated.spring(translation2.x, {
            toValue: 100,
            useNativeDriver: true,
          }),
          Animated.spring(translation2.y, {
            toValue: 200,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.spring(translation2.x, {
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.spring(translation2.y, {
            toValue: 100,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.spring(translation2.x, {
            toValue: 100,
            useNativeDriver: true,
          }),
          Animated.spring(translation2.y, {
            toValue: 200,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.spring(translation2.x, {
            toValue: 0,
            useNativeDriver: true,
          }),
          Animated.spring(translation2.y, {
            toValue: 100,
            useNativeDriver: true,
          }),
        ]),
      ]).start();
    }, 500);
  }, [translation2.x, translation2.y]);

  useEffect(() => {
    Animated.stagger(2000, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, [firstOpacity, secondOpacity, thirdOpacity]);

  return (
    <View style={styles.view}>
      <Header title="Practice3" />
      <View style={styles.seperate}>
        <View>
          <Animated.View
            style={{
              ...styles.squareBox,
              transform: [
                {translateX: translation1.x},
                {translateY: translation1.y},
              ],
            }}
          />
          <Animated.View
            style={{
              ...styles.squareBox,
              transform: [
                {translateX: translation2.x},
                {translateY: translation2.y},
              ],
            }}
          />
        </View>
        <View style={styles.bottomView}>
          <Animated.View style={{...styles.squareBox, opacity: firstOpacity}} />
          <Animated.View
            style={{...styles.squareBox, opacity: secondOpacity}}
          />
          <Animated.View style={{...styles.squareBox, opacity: thirdOpacity}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  squareBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
  },
  seperate: {flex: 1, justifyContent: 'space-between'},
  bottomView: {flexDirection: 'row', justifyContent: 'space-around'},
});
