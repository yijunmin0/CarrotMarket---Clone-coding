import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyCarrot} from '../screens/myCarrot';
import {Profile} from '../screens/profile';
import {Dummy} from '../screens/Dummy';
import {Practice1} from '../screens/practice/Practice1';
import {Practice2} from '../screens/practice/Practice2';
import {Practice3} from '../screens/practice/Practice3';
import {Practice4} from '../screens/practice/Practice4';
import {Practice5} from '../screens/practice/Practice5';
import {Practice6} from '../screens/practice/Practice6';
import {StackScreenProps} from '@react-navigation/stack';

const Stack = createStackNavigator<MyCarrotStackParamList>();

export const MyCarrotStack = function () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyCarrot" component={MyCarrot} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Dummy" component={Dummy} />
      <Stack.Screen name="Practice1" component={Practice1} />
      <Stack.Screen name="Practice2" component={Practice2} />
      <Stack.Screen name="Practice3" component={Practice3} />
      <Stack.Screen name="Practice4" component={Practice4} />
      <Stack.Screen name="Practice5" component={Practice5} />
      <Stack.Screen name="Practice6" component={Practice6} />
    </Stack.Navigator>
  );
};

export type MyCarrotStackParamList = {
  MyCarrot: undefined;
  Profile: undefined;
  Dummy: {title: string};
  Practice1: undefined;
  Practice2: undefined;
  Practice3: undefined;
  Practice4: undefined;
  Practice5: undefined;
  Practice6: undefined;
};

export type Props = StackScreenProps<MyCarrotStackParamList>;
export type DummyProps = StackScreenProps<MyCarrotStackParamList, 'Dummy'>;
