import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { theme } from '../../core/theme';
import { useAppSelector } from '../../hooks/redux';
import { User } from '../../types/types';

export default function DetailsScreen() {
  const { address, company, email, name, phone, username, website } =
    useAppSelector(state => state.currentUserSlice.user) as User;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Details</Text>
      <View style={styles.infoWrapper}>
        <View style={styles.line}>
          <Text style={styles.lineTitle}>Name : </Text>
          <Text style={styles.lineValue}>{name}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineTitle}>Email : </Text>
          <Text style={styles.lineValue}>{email}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineTitle}>User Name : </Text>
          <Text style={styles.lineValue}>{username}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineTitle}>Phone : </Text>
          <Text style={styles.lineValue}>{phone}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineTitle}>Company : </Text>
          <Text style={styles.lineValue}>{company.name}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineTitle}>Address : </Text>
          <Text style={styles.lineValue}>{address.street}</Text>
        </View>
        <View style={styles.line}>
          <Text style={styles.lineTitle}>Website : </Text>
          <Text style={styles.lineValue}>{website}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryContainer,
    padding: 16,
  },
  title: {
    fontFamily: theme.primaryFont.bold,
    fontSize: 25,
    color: theme.colors.black,
  },
  infoWrapper: {
    marginTop: 10,
  },
  line: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineTitle: {
    fontFamily: theme.primaryFont.bold,
    fontSize: 18,
    marginRight: 10,
  },
  lineValue: {
    fontFamily: theme.primaryFont.medium,
    fontSize: 16,
    color: theme.colors.black,
  },
});
