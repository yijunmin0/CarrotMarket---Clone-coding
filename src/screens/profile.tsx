import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from '../components/View';
import {Text} from '../components/Text';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export const Profile = function () {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Header
        title={'프로필'}
        leftIcon={<Icon name="arrowleft" size={20} />}
        leftIconPress={() => navigation.goBack()}
      />
      <Text>this is Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
