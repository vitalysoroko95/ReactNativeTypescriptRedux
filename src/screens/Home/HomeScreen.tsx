import {useCallback, useEffect, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {fetchUsers, setSearchString} from '../../store/Users/UsersSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../core/theme';
import {TextInput} from "../../components";
import UserItem from './components/UserItem';
import {selectedUsers} from "../../store/Users/UserSelector";

import { StackScreenProps } from '@react-navigation/stack';
;
import { MainStackParams } from '../../navigation/MainStack';

export type Props = StackScreenProps<MainStackParams, 'Home'>
export default function HomeScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const {users, searchString} = useAppSelector(store => store.usersReducer);
  const usersData = useAppSelector(selectedUsers)

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getUsers();
    return () => {
      dispatch(setSearchString(null))
    }
  }, []);

  const getUsers = () => {
    dispatch(fetchUsers());
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getUsers();
    await setRefreshing(false);
  }, []);

  const handleChange = (text: string) => {
    text.length === 0 ? dispatch(setSearchString(null)) : dispatch(setSearchString(text))
  }


  return (
    <SafeAreaView style={styles.container}>
      <TextInput value={searchString ? searchString : ''} onChangeText={handleChange} search={true}/>
      {!!searchString?.length && usersData.length == 0 ?
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Empty</Text>
        </View>
        :
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              tintColor={theme.colors.primary}
              onRefresh={onRefresh}
            />
          }
          refreshing={refreshing}
          contentContainerStyle={styles.listWrapper}
          renderItem={({item}) => <UserItem navigation={navigation} {...item} />}
          keyExtractor={item => item.id.toString()}
          data={!!usersData.length ? usersData : users}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
          showsVerticalScrollIndicator={false}
        />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryContainer,
    padding: 16,
  },
  listWrapper: {
    paddingTop: 20,
  },
  separator: {
    height: 10,
  },
  emptyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    fontFamily: theme.primaryFont.bold,
    fontWeight: 'bold'
  }
});
