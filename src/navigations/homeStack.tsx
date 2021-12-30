import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/home';
import {ProductSpecific} from '../screens/productSpecific';
import {StackNavigationProp} from '@react-navigation/stack';

const Stack = createStackNavigator<HomeStackParamList>();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductSpecific" component={ProductSpecific} />
    </Stack.Navigator>
  );
}

type HomeStackParamList = {
  Home: undefined;
  ProductSpecific: {
    id: string;
    picture: string;
    price: string;
    title: string;
    location: string;
  };
};

export type ProductSpecificProps = StackScreenProps<
  HomeStackParamList,
  'ProductSpecific'
>;

export type HomeNavigationProp = {
  navigation: StackNavigationProp<HomeStackParamList, 'Home'>;
};
