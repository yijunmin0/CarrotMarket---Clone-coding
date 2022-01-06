import React, {FC} from 'react';
import {Text as BaseText, StyleSheet, TextProps, Platform} from 'react-native';

export const Text: FC<TextProps> = ({style, children, ...props}) => {
  return (
    <BaseText style={[styles.font, style]} {...props}>
      {children}
    </BaseText>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: Platform.OS === 'ios' ? 'Gill Sans' : 'sans-serif',
    fontSize: 15,
    fontWeight: '300',
  },
});
