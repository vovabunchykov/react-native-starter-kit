import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import styles from './style';

const Button = ({text, handleSubmit}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
