import {View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import { theme } from '../../../core/theme';
import { Text } from 'react-native-paper';
import { User } from '../../../types/types';
import icons from '../../../core/icons'
export default function UserItem({ ...item }: User) {
  const { address, email, name, username } = item;

  return (
    <TouchableWithoutFeedback>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text>{email}</Text>
        </View >
        <Image source={icons.arrowRight} style={styles.icon}  />
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
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize:20
  },
  icon: {
    width:24,
    height: 24
  }
});
