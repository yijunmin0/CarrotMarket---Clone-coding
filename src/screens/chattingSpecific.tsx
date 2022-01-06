import React from 'react';
// import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
// import {Header} from '../components/Header';
import {View} from '../assets/styles/View';
import {Text} from '../assets/styles/Text';
// import Icon from 'react-native-vector-icons/AntDesign';

export const ChattingSpecific = function () {
  // const navigation = useNavigation();
  return (
    <View style={styles.view}>
      {/* <Header
        title={'채팅 상세'}
        leftIcon={<Icon name="arrowleft" size={20} />}
        leftIconPress={() => navigation.goBack()}
      /> */}
      <Text>this is ChattingSpecific</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
