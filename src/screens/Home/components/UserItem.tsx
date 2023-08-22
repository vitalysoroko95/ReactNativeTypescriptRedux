import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { theme } from '../../../core/theme';
import { Text } from 'react-native-paper';
import { Navigation, User } from '../../../types/types';
import icons from '../../../core/icons';
import { useAppDispatch } from '../../../hooks/redux';
import { setCurrentUser } from '../../../store/CurrentUser/CurrentUserSlice';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParams } from '../../../navigation/MainStack';

interface Props extends User {
  navigation?: StackNavigationProp<MainStackParams, 'Home', undefined>;
}

export default function UserItem({ navigation, ...item }: Props) {
  const { email, name } = item;

  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(setCurrentUser(item));
    navigation && navigation.navigate('ListItem');
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text>{email}</Text>
        </View>
        <Image source={icons.arrowRight} style={styles.icon} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
