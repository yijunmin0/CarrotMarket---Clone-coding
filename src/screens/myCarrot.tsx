import React from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {Props} from '../navigations/myCarrotStack';
import {Header} from '../components/header';

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
  view: {flex: 1, backgroundColor: 'white'},
});
