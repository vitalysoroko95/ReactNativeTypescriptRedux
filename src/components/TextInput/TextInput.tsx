import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {TextInput as Input} from 'react-native-paper';

import {theme} from '../../core/theme';
import icons from './../../core/icons'

type Props = React.ComponentProps<typeof Input> & { search?: boolean };


const TextInput = ({search, ...props}: Props,) => (
  <View style={styles.container}>
    <Input
      mode="outlined"
      selectionColor={theme.colors.primary}
      style={styles.input}
      underlineColor="transparent"
      {...props}
    />
    {search && <View style={styles.search}><Image style={styles.icon} source={icons.search}/></View>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    width: '100%',
    position: 'relative'
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  error: {
    color: theme.colors.error,
    fontSize: 14,
    paddingHorizontal: 4,
    paddingTop: 4,
  },
  search: {
    position: 'absolute',
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 16,
    paddingTop:4,
  },
  icon: {
    width: 24,
    height: 24
  }
});

export default memo(TextInput);
