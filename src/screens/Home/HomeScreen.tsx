import { useCallback, useEffect, useState } from 'react';
import { StyleSheet, FlatList, View, RefreshControl } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/Users/UsersSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../core/theme';
import { TextInput } from 'react-native-paper';
import UserItem from './components/UserItem';

export default function HomeScreen() {
  const dispatch = useAppDispatch();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    dispatch(fetchUsers());
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getUsers();
    await setRefreshing(false);
  }, []);

  const { users } = useAppSelector(store => store.userReducer);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput />
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
        renderItem={({ item }) => <UserItem {...item} />}
        keyExtractor={item => item.id.toString()}
        data={users}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        showsVerticalScrollIndicator={false}
      />
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
});
