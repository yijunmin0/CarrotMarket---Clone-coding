import React, {FC} from 'react';
import {View as BaseView, ViewProps, StyleSheet} from 'react-native';

export const View: FC<ViewProps> = props => {
  return (
    <BaseView style={[styles.view, props.style]}>{props.children}</BaseView>
  );
};

const styles = StyleSheet.create({view: {backgroundColor: 'white'}});
