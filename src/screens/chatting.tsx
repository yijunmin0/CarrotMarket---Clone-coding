import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {SafeAreaView} from '../assets/styles/SafeAreaView';
import {Text} from '../assets/styles/Text';
// import {Header} from '../components/Header';
import {Props} from '../navigations/ChattingStack';

export const Chatting = function ({navigation}: Props) {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Header title={'채팅'} /> */}
      <Text>this is Chatting</Text>
      <Button
        title="Go To Chatting"
        onPress={() => {
          navigation.navigate('ChattingSpecific');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
