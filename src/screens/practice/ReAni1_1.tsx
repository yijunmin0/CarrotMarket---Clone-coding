import React, {useRef, useEffect} from 'react';
import {Animated, Button, StyleSheet, Dimensions} from 'react-native';
import {Header} from '../../components/Header';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';

export const ReAni1_1 = function () {
  const width = Dimensions.get('window').width;
  const translation = useRef(new Animated.Value(0)).current;
  const changeTranslation = () =>
    Animated.spring(translation, {
      toValue: Math.random(),
      useNativeDriver: false,
    }).start();

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     for (let i = 0; i < 100000000; i++);
  //   }, 0);
  //   return () => clearInterval(id);
  // }, []);

  return (
    <SafeAreaView style={styles.view}>
      <Header title="ReAni1_1" />
      <Animated.View
        style={{
          ...styles.redSquare,
          width: Animated.multiply(translation, width),
        }}
      />
      <Button title="changeWidth" onPress={changeTranslation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  redSquare: {height: 100, backgroundColor: 'red'},
});
