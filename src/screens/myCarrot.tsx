import React from 'react';
import {StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import {View} from '../assets/styles/View';
import {Text} from '../assets/styles/Text';
import {Props} from '../navigations/MyCarrotStack';
import {Header} from '../components/Header';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {MyCarrotContentBox} from '../components/MyCarrotContentBox';
import {MyCarrotContent} from '../components/MyCarrotContent';
import useUser from '../hooks/useUser';
import {SafeAreaView} from '../assets/styles/SafeAreaView';

export const MyCarrot = function ({navigation}: Props) {
  const userInfo = useUser().userInfo;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.backview}>
        <Header title={'나의당근'} />
        <View style={styles.profile}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('Profile')}>
            <View style={styles.profileHead}>
              <Image
                source={{uri: userInfo?.user.photo} as {}}
                style={styles.profileImage}
              />
              <View style={styles.profileHeadMiddle}>
                <Text style={styles.textName}>{userInfo?.user.givenName}</Text>
                <Text style={styles.textSub}>{userInfo?.user.email}</Text>
              </View>
              <View style={styles.profileHeadLast}>
                <Icon name="right" size={20} />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.profileBody}>
            <View>
              <TouchableOpacity
                style={styles.iconWrapper}
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate('Dummy', {title: '판매 내역'})
                }>
                <Icon name="gift" size={25} />
              </TouchableOpacity>
              <Text style={styles.textNormal}>판매내역</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.iconWrapper}
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate('Dummy', {title: '구매 내역'})
                }>
                <Icon name="creditcard" size={20} />
              </TouchableOpacity>
              <Text style={styles.textNormal}>구매내역</Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.iconWrapper}
                activeOpacity={1}
                onPress={() =>
                  navigation.navigate('Dummy', {title: '관심 목록'})
                }>
                <Icon name="checkcircleo" size={20} />
              </TouchableOpacity>
              <Text style={styles.textNormal}>관심목록</Text>
            </View>
          </View>
        </View>
        <MyCarrotContentBox>
          <MyCarrotContent
            icon={<Icon name="team" size={20} />}
            title="제스처/애니메이션 연습1"
            route="Practice1"
          />
          <MyCarrotContent
            icon={<Icon name="sharealt" size={20} />}
            title="제스처/애니메이션 연습2"
            route="Practice2"
          />
          <MyCarrotContent
            icon={<Icon name="notification" size={20} />}
            title="제스처/애니메이션 연습3"
            route="Practice3"
          />
          <MyCarrotContent
            icon={<Icon name="tagso" size={20} />}
            title="제스처/애니메이션 연습4"
            route="Practice4"
          />
          <MyCarrotContent
            icon={<Icon name="car" size={20} />}
            title="제스처/애니메이션 연습5"
            route="Practice5"
          />
          <MyCarrotContent
            icon={<Icon name="bank" size={20} />}
            title="제스처/애니메이션 연습6"
            route="Practice6"
          />
        </MyCarrotContentBox>
        <MyCarrotContentBox>
          <MyCarrotContent
            icon={<Icon name="laptop" size={20} />}
            title="ReAni1_1"
            route="ReAni1_1"
          />
          <MyCarrotContent
            icon={<Icon name="staro" size={20} />}
            title="ReAni1_2"
            route="ReAni1_2"
          />
          <MyCarrotContent
            icon={<Icon name="filter" size={20} />}
            title="ReAni2"
            route="ReAni2"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni3_1"
            route="ReAni3_1"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni3_2"
            route="ReAni3_2"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni3_3"
            route="ReAni3_3"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni4"
            route="ReAni4"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni5"
            route="ReAni5"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni6"
            route="ReAni6"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni7"
            route="ReAni7"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni8"
            route="ReAni8"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni9"
            route="ReAni9"
          />
          <MyCarrotContent
            icon={<Icon name="meh" size={20} />}
            title="ReAni10"
            route="ReAni10"
          />
        </MyCarrotContentBox>
        <MyCarrotContentBox>
          <MyCarrotContent
            icon={<Icon name="shoppingcart" size={20} />}
            title="모아보기"
            route="Dummy"
          />
          <MyCarrotContent
            icon={<Icon name="save" size={20} />}
            title="당근 가계부"
            route="Dummy"
          />
          <MyCarrotContent
            icon={<Icon name="videocamera" size={20} />}
            title="받은 쿠폰함"
            route="Dummy"
          />
          <MyCarrotContent
            icon={<Icon name="totop" size={20} />}
            title="내 단골 가게"
            route="Dummy"
          />
        </MyCarrotContentBox>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  backview: {flex: 1, backgroundColor: Colors.grey200},
  profile: {padding: 15, marginBottom: 5},
  profileHead: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profileHeadMiddle: {flex: 1, paddingLeft: 10},
  profileHeadLast: {justifyContent: 'center'},
  profileBody: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconWrapper: {
    backgroundColor: 'rgba(237, 145, 33, 0.5)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textNormal: {textAlign: 'center', fontWeight: '300'},
  textName: {fontWeight: '500', fontSize: 18},
  textSub: {fontWeight: '400', color: Colors.grey500},
  profileImage: {width: 70, height: 70, borderRadius: 35},
});
