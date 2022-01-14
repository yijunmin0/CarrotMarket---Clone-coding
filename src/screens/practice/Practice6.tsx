import React, {useRef} from 'react';
import {StyleSheet, Animated, Platform, StatusBar} from 'react-native';
import {Header} from '../../components/Header';
import {View} from '../../assets/styles/View';
import {SafeAreaView} from '../../assets/styles/SafeAreaView';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const os = Platform.OS;

export const Practice6 = function () {
  const scrolling = useRef(new Animated.Value(0)).current;
  const translation = scrolling.interpolate({
    inputRange: [100, 130],
    outputRange: [-44, 0],
    extrapolate: 'clamp',
  });
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.headerEmptyView} />
      <Animated.View style={{transform: [{translateY: translation}]}}>
        <Header title="Practice6" />
      </Animated.View>
      <Animated.ScrollView
        style={styles.scrollView}
        scrollEventThrottle={16}
        //event.nativeEvent.contentOffset.y
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrolling}}}],
          {useNativeDriver: true},
        )}>
        <View style={styles.innerLongView} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  scrollView: {flex: 1},
  innerLongView: {flex: 1, height: 2000},
  headerEmptyView: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: os === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight,
    zIndex: 1,
    backgroundColor: 'white',
  },
});
