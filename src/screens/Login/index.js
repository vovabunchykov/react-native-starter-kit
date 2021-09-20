import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import compose from 'lodash/fp/compose';
import {withFormik} from 'formik';

import i18n from '../../locales/i18next';
import {schemaLogin} from '../../constants/schema';
import {login, loginClean} from '../../store/redux/auth/login';
import {Button, Input} from '../../components';

import styles from './style';

const Login = ({
  navigation,
  values,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
  touched,
  serverErrorMessage,
  loginClean,
}) => {
  const [displayText, changeDisplayText] = useState('');
  const cleanError = (name) => {
    changeDisplayText(name);
    loginClean();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Login</Text>
      <View style={styles.block}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.back}>Go to Welcome</Text>
        </TouchableWithoutFeedback>
      </View>
      <Input
        value={values.email}
        name="email"
        title={i18n.t('pages.login.emailTitle')}
        placeholder={i18n.t('pages.login.emailPlaceholder')}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        error={displayText === 'email' ? null : errors.email}
        touched={touched.email}
        onFocus={cleanError}
        secureTextEntry={false}
      />
      <Input
        value={values.password}
        name="password"
        title={i18n.t('pages.login.passwordTitle')}
        placeholder={i18n.t('pages.login.passwordPlaceholder')}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        error={displayText === 'password' ? null : errors.password}
        touched={touched.password}
        onFocus={cleanError}
        secureTextEntry
      />
      {serverErrorMessage && serverErrorMessage.length && (
        <Text style={styles.error}>{serverErrorMessage}</Text>
      )}
      <Button handleSubmit={handleSubmit} text="Login" />
    </View>
  );
};

export default compose(
  connect(
    ({auth}) => ({
      loading: auth.login.loading,
      serverErrorMessage: auth.login.error,
    }),
    (dispatch) => bindActionCreators({login, loginClean}, dispatch),
  ),
  withFormik({
    mapPropsToValues: () => {
      return {email: 'eve.holt@reqres.in', password: 'cityslicka'};
    },
    validationSchema: schemaLogin,
    validateOnChange: true,
    handleSubmit: (values, {props, setSubmitting}) => {
      props.login({
        email: values.email,
        password: values.password,
      });
      if (!props.error) {
        setSubmitting(false);
      }
    },
  }),
)(Login);
