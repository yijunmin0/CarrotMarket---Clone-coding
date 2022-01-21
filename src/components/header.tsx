import React, {FC, ReactElement} from 'react';
import {StyleSheet, TouchableOpacity, ViewProps} from 'react-native';
import {View} from '../assets/styles/View';
import {Text} from '../assets/styles/Text';

interface HeaderProps extends ViewProps {
  title: string;
  titlePress?: () => void;
  rightIcon?: ReactElement;
  rightIconPress?: () => void;
  leftIcon?: ReactElement;
  leftIconPress?: () => void;
  dark?: boolean;
}

export const headerHegiht = 44;

export const Header: FC<HeaderProps> = ({
  title,
  titlePress,
  rightIcon,
  rightIconPress,
  leftIcon,
  leftIconPress,
  style,
  dark = true,
}) => {
  return (
    <View
      style={[
        styles.container,
        style,
        {justifyContent: leftIcon ? 'space-between' : 'flex-start'},
        // eslint-disable-next-line react-native/no-inline-styles
        {backgroundColor: dark ? 'white' : 'transparent'},
        {borderBottomWidth: dark ? 0.5 : 0.0},
        // eslint-disable-next-line react-native/no-inline-styles
        {justifyContent: leftIcon ? 'center' : 'flex-start'},
      ]}>
      <View style={styles.leftBox}>
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
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{...styles.titleText, color: dark ? 'black' : 'white'}}>
            {' '}
            {title}{' '}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightBox}>
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
    width: '100%',
    height: headerHegiht,
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingRight: 15,
  },
  titleContainer: {
    flex: 8,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  leftBox: {
    flex: 1,
    left: 10,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  rightBox: {
    flex: 1,
    right: 10,
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
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
