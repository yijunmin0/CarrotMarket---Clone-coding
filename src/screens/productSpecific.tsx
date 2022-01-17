import React, {useState, useRef, useEffect} from 'react';
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
import {
  PanGestureHandler,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const os = Platform.OS;
const standard = 40;

export const ProductSpecific = function ({route}: ProductSpecificProps) {
  const {picture, price, title, location} = route.params;
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const doubleTapRef = useRef();
  const [isLike, setIsLike] = useState<boolean>(false);
  const scrolling = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const translationView = scrolling.interpolate({
    inputRange: [-200, 0, 0],
    outputRange: [100, 0, 0],
    //이 비율을 통해서 내려가는 정도를 세팅할 수 있음
  });
  const translationImage = scrolling.interpolate({
    inputRange: [-400, -standard, -standard],
    outputRange: [2.8, 1, 1],
  });
  const [dark, setDark] = useState<boolean>(false);
  const [onLoad, setOnLoad] = useState<boolean>(false);
  useEffect(() => {
    !onLoad &&
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 0.25,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.75,
            useNativeDriver: true,
          }),
        ]),
      ).start();
  });
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
        <TapGestureHandler
          waitFor={doubleTapRef}
          onActivated={() => {
            console.log(1);
          }}>
          <TapGestureHandler
            ref={doubleTapRef}
            numberOfTaps={2}
            maxDelayMs={300}
            onActivated={() => {
              setIsLike(isLike => !isLike);
            }}>
            <Animated.Image
              source={{uri: picture}}
              style={{
                ...styles.image,
                top: -standard,
                transform: [{scale: translationImage}],
              }}
              onLoad={() => setOnLoad(true)}
            />
          </TapGestureHandler>
        </TapGestureHandler>
        {!onLoad ? (
          <Animated.View
            style={[styles.loadingImg, {top: -standard, opacity: opacity}]}
          />
        ) : null}
        <Animated.View
          style={[
            styles.bottomView,
            {transform: [{translateY: translationView}], top: -2 * standard},
          ]}>
          <View style={styles.titlebox}>
            <Text style={styles.title}>{title}</Text>
            {isLike ? (
              <Icon name="star" size={20} />
            ) : (
              <Icon name="staro" size={20} />
            )}
          </View>
          <Text>가격 : {price}</Text>
          <Text>지역 : {location}</Text>
          <View style={styles.spaceView} />
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
  headerEmptyView: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: os === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight,
    zIndex: 1,
  },
  spaceView: {
    // backgroundColor: 'blue',
    width: '100%',
    height: 1000,
  },
  bottomView: {backgroundColor: 'white'},
  header: {
    position: 'absolute',
    top: os === 'ios' ? getStatusBarHeight(true) : StatusBar.currentHeight,
    zIndex: 1,
  },
  image: {
    height: Dimensions.get('window').width + 2 * standard,
  },
  loadingImg: {
    height: Dimensions.get('window').width + 2 * standard,
    width: Dimensions.get('window').width,
    backgroundColor: 'gray',
    position: 'absolute',
  },
  titlebox: {
    flex: 1,
    padding: 10,
    paddingRight: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {fontSize: 25, fontWeight: '400'},
});
