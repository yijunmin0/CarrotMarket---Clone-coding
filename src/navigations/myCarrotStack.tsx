import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyCarrot} from '../screens/MyCarrot';
import {Profile} from '../screens/Profile';
import {StackScreenProps} from '@react-navigation/stack';

const Stack = createStackNavigator<MyCarrotStackParamList>();

export const MyCarrotStack = function () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyCarrot" component={MyCarrot} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

type MyCarrotStackParamList = {
  MyCarrot: undefined;
  Profile: undefined;
};

export type Props = StackScreenProps<MyCarrotStackParamList>;
