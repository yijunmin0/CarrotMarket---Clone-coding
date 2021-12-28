import React from 'react';
import {SafeAreaView, StyleSheet, Image} from 'react-native';
import {Home} from './src/screens/home';
import {HomeTown} from './src/screens/hometown';
import {AroundMe} from './src/screens/aroundMe';
import {Chatting} from './src/screens/chatting';
import {MyCarrot} from './src/screens/myCarrot';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Profile} from './src/screens/profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MyCarrotStack = function () {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="나의 당근1" component={MyCarrot} />
      <Stack.Screen name="프로필" component={Profile} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
              let iconName;
              if (route.name === '홈') {
                iconName = focused
                  ? require('./src/assets/images/home_fill.png')
                  : require('./src/assets/images/home.png');
              } else if (route.name === '동네생활') {
                iconName = focused
                  ? require('./src/assets/images/hometown_fill.png')
                  : require('./src/assets/images/hometown.png');
              } else if (route.name === '내 근처') {
                iconName = focused
                  ? require('./src/assets/images/aroundMe_fill.png')
                  : require('./src/assets/images/aroundMe.png');
              } else if (route.name === '채팅') {
                iconName = focused
                  ? require('./src/assets/images/chatting_fill.png')
                  : require('./src/assets/images/chatting.png');
              } else if (route.name === '나의 당근') {
                iconName = focused
                  ? require('./src/assets/images/myCarrot_fill.png')
                  : require('./src/assets/images/myCarrot.png');
              }
              return <Image source={iconName} style={styles.icons} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            name="홈"
            options={{tabBarLabel: '홈'}}
            component={Home}
          />
          <Tab.Screen
            name="동네생활"
            options={{tabBarLabel: '동네생활'}}
            component={HomeTown}
          />
          <Tab.Screen
            name="내 근처"
            options={{tabBarLabel: '내 근처'}}
            component={AroundMe}
          />
          <Tab.Screen
            name="채팅"
            options={{tabBarLabel: '채팅'}}
            component={Chatting}
          />
          <Tab.Screen
            name="나의 당근"
            options={{tabBarLabel: '나의 당근'}}
            component={MyCarrotStack}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icons: {width: 25, height: 25},
});
