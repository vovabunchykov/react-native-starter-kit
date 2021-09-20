import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {Language, StatusBar} from '../../components';

import styles from './style';

const itemsMenu = ['Login', 'Registration', 'ResetPassword'];

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.h1}>Welcome</Text>
          {itemsMenu.map((menu, index) => {
            return (
              <View style={styles.block} key={index}>
                <TouchableWithoutFeedback
                  onPress={() => navigation.navigate(menu)}>
                  <Text style={styles.text}>Go to {menu} screen</Text>
                </TouchableWithoutFeedback>
              </View>
            );
          })}
          <Language />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
