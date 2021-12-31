import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button} from 'react-native';
import {Text} from 'react-native';
import {View} from 'react-native';

export const Chatting = function () {
  const navigation = useNavigation();
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
