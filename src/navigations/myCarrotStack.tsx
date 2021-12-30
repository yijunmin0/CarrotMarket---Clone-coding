import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyCarrot} from '../screens/myCarrot';
import {Profile} from '../screens/profile';

const Stack = createStackNavigator<MyCarrotStackParamList>();

export const MyCarrotStack = function () {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="MyCarrot" component={MyCarrot} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

type MyCarrotStackParamList = {
  MyCarrot: undefined;
  Profile: undefined;
};
