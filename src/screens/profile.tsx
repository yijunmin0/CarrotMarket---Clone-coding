import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {View} from '../components/View';
import {Text} from '../components/Text';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {logout} from '../store/userSlice';
import {GoogleSignin} from 'react-native-google-login';

export const Profile = function () {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      dispatch(logout());
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={styles.view}>
      <Header
        title={'프로필'}
        leftIcon={<Icon name="arrowleft" size={20} />}
        leftIconPress={() => navigation.goBack()}
      />
      <Text>this is Profile</Text>
      <Button title="Log Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
