import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const MyCarrot = function () {
  const navigation = useNavigation();
  return (
    <View>
      <Text>this is MyCarrot</Text>
      <Button
        title="Go to My Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};
