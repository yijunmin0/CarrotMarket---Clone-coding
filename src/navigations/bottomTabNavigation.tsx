import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import {HomeTown} from '../screens/Hometown';
import {AroundMe} from '../screens/AroundMe';
import {ScreenName} from '../data/screenName';
import {HomeStack} from './HomeStack';
import {MyCarrotStack} from './MyCarrotStack';
import {ChattingStack} from './ChattingStack';

const Tab = createBottomTabNavigator<ScreenName>();

export const BottomTabNavigation = function () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused
                ? require('../assets/images/home_fill.png')
                : require('../assets/images/home.png');
            } else if (route.name === 'HomeTown') {
              iconName = focused
                ? require('../assets/images/hometown_fill.png')
                : require('../assets/images/hometown.png');
            } else if (route.name === 'ArroundMe') {
              iconName = focused
                ? require('../assets/images/aroundMe_fill.png')
                : require('../assets/images/aroundMe.png');
            } else if (route.name === 'ChattingStack') {
              iconName = focused
                ? require('../assets/images/chatting_fill.png')
                : require('../assets/images/chatting.png');
            } else if (route.name === 'MyCarrotStack') {
              iconName = focused
                ? require('../assets/images/myCarrot_fill.png')
                : require('../assets/images/myCarrot.png');
            }
            return <Image source={iconName} style={styles.icons} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: '홈',
            title: '홈',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="HomeTown"
          component={HomeTown}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="ArroundMe"
          component={AroundMe}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="ChattingStack"
          component={ChattingStack}
          options={{tabBarLabel: '채팅', title: '채팅'}}
        />
        <Tab.Screen
          name="MyCarrotStack"
          component={MyCarrotStack}
          options={{
            tabBarLabel: '나의 당근',
            title: '나의 당근',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icons: {width: 25, height: 25},
});
