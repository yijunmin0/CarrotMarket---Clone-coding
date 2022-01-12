import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, Animated} from 'react-native';
import {Header} from '../../components/Header';
import {View} from '../../assets/styles/View';
import {ScrollView} from 'react-native-gesture-handler';

export const Practice5 = function () {
  const [headerShown, setHeaderShown] = useState(false);
  const translation = useRef(new Animated.Value(-44)).current;
  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -44,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [headerShown, translation]);
  return (
    <View style={styles.view}>
      <Animated.View style={{transform: [{translateY: translation}]}}>
        <Header title="Practice5" />
      </Animated.View>
      <ScrollView
        style={styles.scrollView}
        onScroll={event => {
          const scrolling = event.nativeEvent.contentOffset.y;
          if (scrolling > 100) {
            setHeaderShown(true);
          } else {
            setHeaderShown(false);
          }
        }}
        scrollEventThrottle={16}>
        <View style={styles.innerLongView} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  scrollView: {flex: 1},
  innerLongView: {flex: 1, height: 2000},
});
