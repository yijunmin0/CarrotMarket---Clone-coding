import React, {FC} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

type HeaderProps = {
  title: string;
  titlePress?: () => void;
  rightIcon?: any;
  rightIconPress?: () => void;
  leftIcon?: any;
  leftIconPress?: () => void;
};

export const Header: FC<HeaderProps> = ({
  title,
  titlePress,
  rightIcon,
  rightIconPress,
  leftIcon,
  leftIconPress,
}) => {
  return (
    <View
      style={[
        styles.container,
        // eslint-disable-next-line react-native/no-inline-styles
        {justifyContent: leftIcon ? 'center' : 'flex-start'},
      ]}>
      <View style={styles.leftIcon}>
        {leftIcon && (
          <TouchableOpacity onPress={leftIconPress}>
            {leftIcon}
          </TouchableOpacity>
        )}
      </View>
      <View style={[styles.titleContainer]}>
        <TouchableOpacity
          onPress={titlePress}
          disabled={titlePress ? false : true}>
          <Text style={styles.titleText}> {title} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightIcon}>
        {rightIcon && (
          <TouchableOpacity onPress={rightIconPress}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleContainer: {
    height: '100%',
    justifyContent: 'center',
  },
  leftIcon: {
    position: 'absolute',
    left: 10,
    height: '100%',
    justifyContent: 'center',
  },
  rightIcon: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
});

// 사용법
// <Header
// title="홈"
// leftIcon={<Icon name="arrowleft" size={20} />}
// leftIconPress={() => navigation.goBack()}
// rightIcon={<Icon name="arrowleft" size={20} />}
// rightIconPress={() => navigation.goBack()}
// />
