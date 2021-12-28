import React from 'react';
import {ProductSpecific} from '../screens/productSpecific';
import {ChattingSpecific} from '../screens/chattingSpecific';
import {Profile} from '../screens/profile';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="제품 상세" component={ProductSpecific} />
      <Stack.Screen name="채팅 상세" component={ChattingSpecific} />
      <Stack.Screen name="프로필" component={Profile} />
    </Stack.Navigator>
  );
}
