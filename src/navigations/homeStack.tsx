import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {ProductSpecific} from '../screens/productSpecific';
const Stack = createStackNavigator<HomeStackParamList>();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="ProductSpecific"
        component={ProductSpecific}
        options={}
      />
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

export type Props = StackScreenProps<HomeStackParamList>;
