import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {View} from '../components/View';
import {Text} from '../components/Text';
import {Props} from '../navigations/MyCarrotStack';
import {Header} from '../components/Header';

export const MyCarrot = function ({navigation}: Props) {
  return (
    <View style={styles.view}>
      <Header title={'나의당근'} />
      <Text>this is MyCarrot</Text>
      <Button
        title="Go to My Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
