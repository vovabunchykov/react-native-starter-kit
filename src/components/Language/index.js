import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {withTranslation} from 'react-i18next';

import styles from './style';

const languages = ['eng', 'ukr', 'rus'];

const Language = ({i18n, t}) => {
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t('components.language.title')}</Text>
      <View style={styles.languages}>
        {Object.entries(i18n.store.data).map((lang, index) => {
          return (
            <TouchableWithoutFeedback
              onPress={() => changeLanguage(lang)}
              key={index}>
              <Text style={styles.text}>{lang[1].translation.name}</Text>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

export default withTranslation()(Language);
