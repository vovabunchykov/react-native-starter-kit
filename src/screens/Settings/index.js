import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {connect, shallowEqual, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Loader, Error} from '../../components';
import {getUserData} from '../../store/redux/user/get';
import {logout} from '../../store/redux/auth/login';

import styles from './style';

const Settings = ({
  navigation,
  getUserData,
  userData,
  userGet,
  userError,
  logout,
}) => {
  useEffect(() => {
    const subscribe = navigation.addListener('focus', () => {
      getUserData();
    });
    return () => {
      subscribe();
    };
  });

  if (userGet) {
    return <Loader />;
  }

  if (userError) {
    return <Error message={userError} />;
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.h1}>Profile</Text>
          <Text>Name: {userData.name}</Text>
          <TouchableOpacity onPress={logout}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default connect(
  ({user}) => ({
    userData: user.data,
    userGet: user.get.loading,
    userError: user.get.error,
  }),
  (dispatch) => bindActionCreators({getUserData, logout}, dispatch),
)(Settings);
