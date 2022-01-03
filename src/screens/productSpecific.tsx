import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Image, Text} from 'react-native';
import {View} from 'react-native';
import {Header} from '../components/header';
import {ProductSpecificProps} from '../navigations/homeStack';
import Icon from 'react-native-vector-icons/AntDesign';

export const ProductSpecific = function ({route}: ProductSpecificProps) {
  const {id, picture, price, title, location} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Header
        title={title}
        leftIcon={<Icon name="arrowleft" size={20} />}
        leftIconPress={() => {
          navigation.goBack();
        }}
      />
      <Image source={{uri: picture}} style={styles.image} />
      <Text>{id}</Text>
      <Text>{price}</Text>
      <Text>{title}</Text>
      <Text>{location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, backgroundColor: 'white'},
  image: {flex: 1},
});
