import React from 'react';

import {StatusBar, useColorScheme} from 'react-native';

import styles from './style';

const StatusBarBlock = () => {
  const colorScheme = useColorScheme();
  return (
    <StatusBar
      barStyle={colorScheme === 'light' ? 'light-content' : 'dark-content'}
    />
  );
};

export default StatusBarBlock;
