import React from 'react';
import {Text} from '../assets/styles/Text';
import {View} from '../assets/styles/View';
import {DummyProps} from '../navigations/MyCarrotStack';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

export const Dummy = function ({route}: DummyProps) {
  const {title} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Header
        title={title}
        leftIcon={<Icon name="arrowleft" size={20} />}
        leftIconPress={() => navigation.goBack()}
      />
      <View style={styles.contentView}>
        <Text style={styles.title}>진달래꽃</Text>
        <Text style={styles.contents}>
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
        </Text>
      </View>
      <FastImage
        source={require('../assets/images/sunRise.gif')}
        style={styles.gif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  contentView: {marginTop: 20},
  title: {
    fontSize: 30,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  contents: {textAlign: 'center'},
  gif: {width: 300, height: 200, marginTop: 20, alignSelf: 'center'},
});
