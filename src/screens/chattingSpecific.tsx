import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '../assets/styles/Text';
import {SafeAreaView} from '../assets/styles/SafeAreaView';

export const ChattingSpecific = function () {
  // const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Header
        title={'채팅 상세'}
        leftIcon={<Icon name="arrowleft" size={20} />}
        leftIconPress={() => navigation.goBack()}
      /> */}
      <Text>this is ChattingSpecific</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
});
