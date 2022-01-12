import React, {FC} from 'react';
import {
  SafeAreaView as BaseSafeAreaView,
  ViewProps,
  StyleSheet,
} from 'react-native';

export const SafeAreaView: FC<ViewProps> = props => {
  return (
    <BaseSafeAreaView style={[styles.view, props.style]}>
      {props.children}
    </BaseSafeAreaView>
  );
};

const styles = StyleSheet.create({view: {backgroundColor: 'white'}});
