import React, {useState, useRef} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {StyleSheet, StatusBar, Platform, Animated} from 'react-native';
import {Image} from 'react-native';
import {Text} from '../assets/styles/Text';
import {Header} from '../components/Header';
import {ProductSpecificProps} from '../navigations/HomeStack';
import Icon from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
import {View} from '../assets/styles/View';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const os = Platform.OS;

export const ProductSpecific = function ({route}: ProductSpecificProps) {
  const {id, picture, price, title, location} = route.params;
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const scrolling = useRef(new Animated.Value(0)).current;
  const translationView = scrolling.interpolate({
    inputRange: [-200, 0, 0],
    outputRange: [200, 0, 0],
  });
  const translationImage = scrolling.interpolate({
    inputRange: [-400, -50, -50],
    outputRange: [2.5, 1, 1],
  });
  const [dark, setDark] = useState(false);
  return (
    <View style={styles.view}>
      <StatusBar
        animated={true}
        barStyle={
          isFocused ? (dark ? 'dark-content' : 'light-content') : 'dark-content'
        }
      />
      {dark ? <View style={styles.headerEmptyView} /> : null}
      <Header
        style={styles.header}
        title={title}
        leftIcon={
          dark ? (
            <Icon name="arrowleft" size={20} />
          ) : (
            <Image
              source={require('../assets/images/whiteLeftArrow.png')}
              style={{width: 20, height: 20}}
            />
          )
        }
        leftIconPress={() => {
          navigation.goBack();
        }}
        dark={dark}
      />
      <Animated.ScrollView
        style={{
          flex: 1,
          transform: [{translateY: Animated.multiply(translationView, -1)}],
        }}
        scrollEventThrottle={1}
        onScroll={event => {
          scrolling.setValue(event.nativeEvent.contentOffset.y);
          if (
            event.nativeEvent.contentOffset.y >
            Dimensions.get('window').width * 0.7
          ) {
            setDark(true);
          } else {
            setDark(false);
          }
        }}>
        <Animated.Image
          source={{uri: picture}}
          style={{
            ...styles.image,
            transform: [{scale: translationImage}],
          }}
        />
        <Animated.View
          style={{
            backgroundColor: 'white',
            transform: [{translateY: translationView}],
            top: -100,
          }}>
          <Text>{id}</Text>
          <Text>{price}</Text>
          <Text>{title}</Text>
          <Text>{location}</Text>
          <Text>dummy</Text>
          <View style={styles.spaceView} />
        </Animated.View>
      </Animated.ScrollView>

      {/* <Animated.ScrollView
        style={styles.scrollView}
        scrollEventThrottle={16}
        event.nativeEvent.contentOffset.y
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrolling}}}],
          {useNativeDriver: true},
        )}></Animated.ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  headerEmptyView: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: os === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight,
    zIndex: 1,
  },
  spaceView: {
    width: '100%',
    height: 1000,
  },
  header: {
    position: 'absolute',
    top: os === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight,
    zIndex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width + 100,
  },
});
