import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyCarrot} from '../screens/myCarrot';
import {Profile} from '../screens/profile';
import {Dummy} from '../screens/Dummy';
import {StackScreenProps} from '@react-navigation/stack';

const Stack = createStackNavigator<MyCarrotStackParamList>();

export const MyCarrotStack = function () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyCarrot" component={MyCarrot} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Dummy" component={Dummy} />
    </Stack.Navigator>
  );
};

type MyCarrotStackParamList = {
  MyCarrot: undefined;
  Profile: undefined;
  Dummy: {title: string};
};

export type Props = StackScreenProps<MyCarrotStackParamList>;
export type DummyProps = StackScreenProps<MyCarrotStackParamList, 'Dummy'>;
