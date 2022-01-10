import {useNavigation} from '@react-navigation/native';
import React, {FC, ReactElement} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '../assets/styles/Text';
import {View} from '../assets/styles/View';
import {Props} from '../navigations/MyCarrotStack';
import {MyCarrotStackParamList} from '../navigations/MyCarrotStack';

type MyCarrotContentProps = {
  icon: ReactElement;
  title: string;
  route: keyof MyCarrotStackParamList;
};

export const MyCarrotContent: FC<MyCarrotContentProps> = function ({
  icon,
  title,
  route,
}) {
  const navigation = useNavigation<Props['navigation']>();
  return (
    <View>
      <TouchableOpacity
        style={styles.view}
        activeOpacity={1}
        onPress={() => navigation.navigate(route, {title})}>
        <View style={styles.viewIcon}>{icon}</View>
        <Text>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flexDirection: 'row', alignItems: 'center', padding: 10},
  viewIcon: {marginRight: 10},
});
