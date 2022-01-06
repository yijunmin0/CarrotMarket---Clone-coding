import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Image} from 'react-native';
import {View} from '../assets/styles/View';
import {Text} from '../assets/styles/Text';
import {Header} from '../components/Header';
import {ProductSpecificProps} from '../navigations/HomeStack';
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
  view: {flex: 1},
  image: {flex: 1},
});
