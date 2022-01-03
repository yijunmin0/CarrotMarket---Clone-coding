import React from 'react';
import {Text} from 'react-native';

export const myAppText = props => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Text style={{fontFamily: 'sans-serif'}}>{props.children}</Text>;
};
