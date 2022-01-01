import React from 'react';
import {NativeModules, Button} from 'react-native';

const {CalendarModule} = NativeModules;

export const CalendarButton = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};
