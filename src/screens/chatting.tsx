import React from 'react';
import {Button} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';
import {Props} from '../navigations/chattingStack';

export const Chatting = function ({navigation}: Props) {
  return (
    <View>
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
