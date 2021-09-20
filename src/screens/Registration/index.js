import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import styles from './style';

const Registration = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Registration</Text>
      <View style={styles.block}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.back}>Go to Welcome</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Registration;
