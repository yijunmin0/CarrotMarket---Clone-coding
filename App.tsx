import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomTabNavigation} from './src/navigations/BottomTabNavigation';
import {Login} from './src/screens/Login';
import auth from '@react-native-firebase/auth';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

export default function App() {
  // type UserInfoProps = Awaited<ReturnType<typeof GoogleSignin.signIn>>;
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  // Handle user state changes
  function onAuthStateChanged(user1: FirebaseAuthTypes.User | null) {
    setUser(user1);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
    return null;
  }
  return (
    <View style={styles.areaView}>
      {user ? <BottomTabNavigation /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
