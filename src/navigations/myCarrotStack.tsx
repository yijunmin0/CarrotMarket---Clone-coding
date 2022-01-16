import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MyCarrot} from '../screens/MyCarrot';
import {Profile} from '../screens/profile';
import {Dummy} from '../screens/Dummy';
import {Practice1} from '../screens/practice/Practice1';
import {Practice2} from '../screens/practice/Practice2';
import {Practice3} from '../screens/practice/Practice3';
import {Practice4} from '../screens/practice/Practice4';
import {Practice5} from '../screens/practice/Practice5';
import {Practice6} from '../screens/practice/Practice6';
import {ReAni1_1} from '../screens/practice/ReAni1_1';
import {ReAni1_2} from '../screens/practice/ReAni1_2';
import {ReAni2} from '../screens/practice/ReAni2';
import {ReAni3} from '../screens/practice/ReAni3';
import {ReAni4} from '../screens/practice/ReAni4';
import {ReAni5} from '../screens/practice/ReAni5';
import {ReAni6} from '../screens/practice/ReAni6';
import {ReAni7} from '../screens/practice/ReAni7';
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
      <Stack.Screen name="ReAni1_1" component={ReAni1_1} />
      <Stack.Screen name="ReAni1_2" component={ReAni1_2} />
      <Stack.Screen name="ReAni2" component={ReAni2} />
      <Stack.Screen name="ReAni3" component={ReAni3} />
      <Stack.Screen name="ReAni4" component={ReAni4} />
      <Stack.Screen name="ReAni5" component={ReAni5} />
      <Stack.Screen name="ReAni6" component={ReAni6} />
      <Stack.Screen name="ReAni7" component={ReAni7} />
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
  ReAni1_1: undefined;
  ReAni1_2: undefined;
  ReAni2: undefined;
  ReAni3: undefined;
  ReAni4: undefined;
  ReAni5: undefined;
  ReAni6: undefined;
  ReAni7: undefined;
};

export type Props = StackScreenProps<MyCarrotStackParamList>;
export type DummyProps = StackScreenProps<MyCarrotStackParamList, 'Dummy'>;
