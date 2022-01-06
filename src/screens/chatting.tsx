import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {View} from '../assets/styles/View';
import {Text} from '../assets/styles/Text';
// import {Header} from '../components/Header';
import {Props} from '../navigations/ChattingStack';

export const Chatting = function ({navigation}: Props) {
  return (
    <View style={styles.view}>
      {/* <Header title={'채팅'} /> */}
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
  view: {flex: 1},
});
