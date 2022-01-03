import React from 'react';
import {Button} from 'react-native';
import {Text, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {Header} from '../components/header';
import {Props} from '../navigations/chattingStack';

export const Chatting = function ({navigation}: Props) {
  return (
    <View style={styles.view}>
      <Header title={'채팅'} />
      <Text>this is Chatting</Text>
      <Button
        title="Go To Chatting"
        onPress={() => {
          navigation.navigate('ChattingSpecific');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
});
