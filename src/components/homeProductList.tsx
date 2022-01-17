import React, {FC, useState, useEffect} from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {View} from '../assets/styles/View';
import {Text} from '../assets/styles/Text';
import {Product} from '../data/api';
import {Props} from '../navigations/HomeStack';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {Colors} from 'react-native-paper';

export type ProductProps = {
  product: Product;
};

export const HomeProductList: FC<ProductProps> = ({product}) => {
  const navigation = useNavigation<Props['navigation']>();
  const [onLoad, setOnLoad] = useState<boolean>(false);
  const loadingImgOpacity = useSharedValue(0.25);
  useEffect(() => {
    !onLoad &&
      (loadingImgOpacity.value = withRepeat(
        withTiming(0.75, {duration: 1000}),
        -1,
        true,
      ));
  });
  const loadingImgStyle = useAnimatedStyle(() => {
    return {
      opacity: loadingImgOpacity.value,
    };
  });
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductSpecific', {...product});
      }}>
      <View style={styles.view}>
        <View style={styles.leftContents}>
          <Image
            onLoad={() => {
              setOnLoad(true);
            }}
            source={{uri: product.picture, cache: 'reload'}}
            style={styles.image}
          />
          {!onLoad && (
            <Animated.View style={[styles.loadingImg, loadingImgStyle]} />
          )}
        </View>
        <View style={styles.rightContents}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.location}>location : {product.location}</Text>
          <Text style={styles.price}>{product.price}$</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1, flexDirection: 'row', padding: 10},
  leftContents: {flex: 1},
  rightContents: {flex: 2, marginLeft: 5},
  image: {height: 100, resizeMode: 'cover', borderRadius: 10},
  title: {fontWeight: '400', marginBottom: 8},
  location: {fontSize: 10, fontWeight: '400', marginBottom: 8},
  price: {fontWeight: '600'},
  loadingImg: {
    position: 'absolute',
    flex: 1,
    backgroundColor: Colors.grey500,
    height: 100,
    width: '100%',
    borderRadius: 10,
  },
});
