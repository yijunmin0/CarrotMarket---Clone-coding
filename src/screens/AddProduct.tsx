import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {SafeAreaView} from '../assets/styles/SafeAreaView';
import database from '@react-native-firebase/database';

export const AddProduct = function () {
  const addData = () =>
    database()
      .ref('/users/12345')
      .set({
        name: 'Ada Lovelace',
        age: 12345,
      })
      .then(() => console.log('Data set.'));
  const readData = () =>
    database()
      .ref('/users/12345')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });
  const readProduct = () =>
    database()
      .ref('/product')
      .once('value')
      .then(snapshot => {
        console.log('User data: ', snapshot.val());
      });

  return (
    <SafeAreaView style={styles.view}>
      <Header title="AddProduct" />
      <Button title="add Data" onPress={addData} />
      <Button title="read Data" onPress={readData} />
      <Button title="read product" onPress={readProduct} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
});
