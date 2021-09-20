// @flow
import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles, {color} from './style';

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
};

export default Loader;
