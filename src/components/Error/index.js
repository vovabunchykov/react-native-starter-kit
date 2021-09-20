// @flow
import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

const Error = ({message = 'Opps...'}) => {
  return (
    <View style={styles.loader}>
      <Text>{message}</Text>
    </View>
  );
};

export default Error;
