import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {Language} from '../../components';

import styles from './style';

const Main = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.h1}>Main</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
