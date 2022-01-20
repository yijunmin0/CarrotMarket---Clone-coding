import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {SafeAreaView} from '../assets/styles/SafeAreaView';
import firestore from '@react-native-firebase/firestore';

export const AddProduct2 = function () {
  const getUser = async function () {
    const users = await firestore().collection('products').get();
    console.log(users.docs[0].data());
  };
  const addUser = async function (user: string, age: number) {
    firestore()
      .collection('Users')
      .add({
        name: user,
        age: age,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return (
    <SafeAreaView style={styles.view}>
      <Header title="AddProduct" />
      <Button title="add Data" onPress={() => addUser('ccc', 26)} />
      <Button title="read Data" onPress={getUser} />
      <Button title="read product" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
