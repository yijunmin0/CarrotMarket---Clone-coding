import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated, Easing, Dimensions} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';

export const Practice2 = function () {
  const translation1 = useRef(new Animated.Value(0)).current;
  const translation2 = useRef(new Animated.Value(0)).current;
  const translation3 = useRef(new Animated.Value(0)).current;
  const translation4 = useRef(new Animated.Value(0)).current;
  const translation5 = useRef(new Animated.Value(0)).current;
  const {width} = Dimensions.get('window');
  useEffect(() => {
    Animated.timing(translation1, {
      toValue: width - 100,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [translation1, width]);
  useEffect(() => {
    Animated.timing(translation2, {
      toValue: width - 100,
      duration: 2000,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  }, [translation2, width]);
  useEffect(() => {
    Animated.timing(translation3, {
      toValue: width - 100,
      duration: 2000,
      easing: Easing.circle,
      useNativeDriver: true,
    }).start();
  }, [translation3, width]);
  useEffect(() => {
    Animated.timing(translation4, {
      toValue: width - 100,
      duration: 2000,
      easing: Easing.cubic,
      useNativeDriver: true,
    }).start();
  }, [translation4, width]);
  useEffect(() => {
    Animated.timing(translation5, {
      toValue: width - 100,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [translation5, width]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header title="Practice2" />
      <Animated.View
        style={{...styles.squareBox, transform: [{translateX: translation1}]}}
      />
      <Animated.View
        style={{...styles.squareBox, transform: [{translateX: translation2}]}}
      />
      <Animated.View
        style={{...styles.squareBox, transform: [{translateX: translation3}]}}
      />
      <Animated.View
        style={{...styles.squareBox, transform: [{translateX: translation4}]}}
      />
      <Animated.View
        style={{...styles.squareBox, transform: [{translateX: translation5}]}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  squareBox: {
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    position: 'relative',
  },
});
