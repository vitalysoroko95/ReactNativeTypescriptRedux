import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { theme } from '../../../core/theme';
import { Text } from 'react-native-paper';
import { User } from '../../../types/types';

export default function UserItem({ ...item }: User) {
  const { address, email, name, username } = item;

  return (
    <TouchableWithoutFeedback>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text>{email}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 8,
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: 12,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize:20
  }
});
