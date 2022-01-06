import React from 'react';
import {Button, StyleSheet, Image} from 'react-native';
import {View} from '../assets/styles/View';
import {Text} from '../assets/styles/Text';
import {Header} from '../components/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../store/userSlice';
import {GoogleSignin} from 'react-native-google-login';
import {RootState} from '../store/store';
import {Colors} from 'react-native-paper';

export const Profile = function () {
  const profile = useSelector((state: RootState) => state.user.userInfo);
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
      <View style={styles.profile}>
        <View style={styles.profileHead}>
          <Image
            source={{uri: profile?.user.photo} as {}}
            style={styles.profileImage}
          />
          <View style={styles.profileHeadMiddle}>
            <Text style={styles.textName}>{profile?.user.givenName}</Text>
            <Text style={styles.textSub}>{profile?.user.email}</Text>
          </View>
        </View>
        <Button title="로그아웃" onPress={signOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  profile: {padding: 15},
  profileHead: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profileHeadMiddle: {flex: 1, paddingLeft: 10},
  profileHeadLast: {justifyContent: 'center'},
  textNormal: {textAlign: 'center', fontWeight: '300'},
  textName: {fontWeight: '500', fontSize: 18},
  textSub: {fontWeight: '400', color: Colors.grey500},
  profileImage: {width: 70, height: 70, borderRadius: 35},
});
