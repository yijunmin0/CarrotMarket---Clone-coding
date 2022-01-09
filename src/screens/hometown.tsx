import React, {useState} from 'react';
import {StyleSheet, TextInput, Button} from 'react-native';
import {Header} from '../components/Header';
import {View} from '../assets/styles/View';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {saveMemo} from '../store/memoSlice';

export const HomeTown = function () {
  const storedMemo = useSelector((state: RootState) => state.memo.memo);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [memo, setMemo] = useState(storedMemo);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setMemo(storedMemo);
    });
    return unsubscribe;
  }, [navigation, storedMemo]);
  return (
    <View style={styles.view}>
      <Header title={'동네생활'} />
      <TextInput
        value={memo}
        placeholder="메모하세요!"
        multiline={true}
        onChangeText={text => {
          setMemo(text);
        }}
        style={styles.textInput}
      />
      <Button
        title="redux 저장"
        onPress={() => {
          dispatch(saveMemo(memo));
        }}>
        Button
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {flex: 1},
  textInput: {
    width: '80%',
    height: '20%',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginVertical: 20,
    borderColor: Colors.grey500,
    padding: 10,
    paddingTop: 10,
  },
});
