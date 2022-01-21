import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {ProductSpecific} from '../screens/ProductSpecific';
import {Movie} from '../data/api';
const Stack = createStackNavigator<HomeStackParamList>();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductSpecific" component={ProductSpecific} />
    </Stack.Navigator>
  );
}

type HomeStackParamList = {
  Home: undefined;
  ProductSpecific: Movie;
};

export type ProductSpecificProps = StackScreenProps<
  HomeStackParamList,
  'ProductSpecific'
>;

export type Props = StackScreenProps<HomeStackParamList>;
