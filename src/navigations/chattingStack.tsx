import React from 'react';

import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {Chatting} from '../screens/Chatting';
import {ChattingSpecific} from '../screens/ChattingSpecific';
import {StackScreenProps} from '@react-navigation/stack';
import {Text} from '../assets/styles/Text';
import Icon from 'react-native-vector-icons/AntDesign';

const Stack = createStackNavigator<ChattingStackParamList>();

const makeHeaderOptions = (params: {
  leftIcon?: React.ReactElement;
  title?: string;
}) => {
  const obj: StackNavigationOptions = {};
  if (!params.leftIcon) {
    obj.title = '';
    obj.headerLeft = () => (
      <Text style={{fontSize: 20, fontWeight: '500', marginLeft: 15}}>
        {params.title}
      </Text>
    );
  } else if (params.leftIcon) {
    obj.title = params.title;
    obj.headerBackImage = () => params.leftIcon;
    obj.headerBackTitleVisible = false;
  }
  return obj;
};

export const ChattingStack = function () {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Chatting" component={Chatting} />
      <Stack.Screen
        name="ChattingSpecific"
        component={ChattingSpecific}
        options={
          makeHeaderOptions({
            title: '채팅 상세',
            leftIcon: (
              <Icon name="arrowleft" size={20} style={{marginLeft: 15}} />
            ),
          })
          // ,{presentation: 'modal'}
        }
      />
    </Stack.Navigator>
  );
};

type ChattingStackParamList = {
  Chatting: undefined;
  ChattingSpecific: undefined;
};

export type Props = StackScreenProps<ChattingStackParamList>;
