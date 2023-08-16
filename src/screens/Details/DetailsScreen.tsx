import {Text} from  'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";
import {theme} from "../../core/theme";

export default function DetailsScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Text</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primaryContainer,
    padding: 16,
  },
});