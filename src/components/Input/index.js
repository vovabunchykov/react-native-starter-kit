import React from 'react';
import {View, Text, TextInput} from 'react-native';

import styles from './style';

const Input = ({
  value,
  name,
  title,
  placeholder,
  onChangeText,
  onBlur,
  secureTextEntry,
  touched,
  error,
  onFocus,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.textInput}
        name={name}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        onFocus={() => onFocus(name)}
        underlineColorAndroid="transparent"
        autoCorrect={false}
      />
      <Text style={styles.error}>{touched && error && error}</Text>
    </View>
  );
};

export default Input;
