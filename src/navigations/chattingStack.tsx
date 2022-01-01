import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Chatting} from '../screens/chatting';
import {ChattingSpecific} from '../screens/chattingSpecific';
import {StackScreenProps} from '@react-navigation/stack';

const Stack = createStackNavigator<ChattingStackParamList>();

export const ChattingStack = function () {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Chatting" component={Chatting} />
      <Stack.Screen name="ChattingSpecific" component={ChattingSpecific} />
    </Stack.Navigator>
  );
};

type ChattingStackParamList = {
  Chatting: undefined;
  ChattingSpecific: undefined;
};

export type Props = StackScreenProps<ChattingStackParamList>;
