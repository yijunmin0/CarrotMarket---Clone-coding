import React, {useEffect, useRef} from 'react';
import {Text} from '../assets/styles/Text';
import {View} from '../assets/styles/View';
import {DummyProps} from '../navigations/MyCarrotStack';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Animated} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SafeAreaView} from '../assets/styles/SafeAreaView';

export const Dummy = function ({route}: DummyProps) {
  const {title} = route.params;
  const navigation = useNavigation();
  const titleTranslation = useRef(new Animated.Value(0)).current;
  const contentTranslation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(titleTranslation, {
      toValue: 145,
      duration: 2000,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, [titleTranslation]);

  useEffect(() => {
    Animated.timing(contentTranslation, {
      toValue: 1,
      duration: 3000,
      delay: 500,
      useNativeDriver: false,
    }).start();
  }, [contentTranslation]);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title={title}
        leftIcon={<Icon name="arrowleft" size={20} />}
        leftIconPress={() => navigation.goBack()}
      />
      <View style={styles.mainView}>
        <Animated.View
          style={{
            ...styles.titleView,
            transform: [
              {translateX: titleTranslation},
              {
                rotate: titleTranslation.interpolate({
                  inputRange: [0, 145],
                  outputRange: ['0deg', '1080deg'],
                }),
              },
            ],
          }}>
          <Text style={styles.title}>진달래꽃</Text>
        </Animated.View>
        <Animated.Text
          style={{
            ...styles.contents,
            color: contentTranslation.interpolate({
              inputRange: [0, 1],
              outputRange: ['white', 'black'],
            }),
          }}>
          나 보기가 역겨워{'\n'}
          가실 때에는{'\n'}
          말없이 고이 보내 드리우리다{'\n'}
          {'\n'}
          영변에 약산{'\n'}
          진달래꽃{'\n'}
          아름 따다 가실 길에 뿌리오리다{'\n'}
          {'\n'}
          가시는 걸음 갈음{'\n'}
          놓인 그 꽃을{'\n'}
          사뿐히 즈려 밟고 가시옵서소{'\n'}
          {'\n'}나 보기가 역겨워{'\n'}
          가실 때에는 죽어도{'\n'}
          아니 눈물 흘리우리다
        </Animated.Text>
        <FastImage
          source={require('../assets/images/sunRise.gif')}
          style={styles.gif}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  mainView: {marginTop: 20, flex: 1},
  titleView: {alignSelf: 'flex-start'},
  title: {
    fontSize: 30,
    fontWeight: '400',
    marginBottom: 20,
  },
  contents: {textAlign: 'center', color: 'white'},
  gif: {width: 300, height: 200, marginTop: 20, alignSelf: 'center'},
});
