// @flow
import {StyleSheet} from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  container: {
    marginTop: 25,
    width: '90%',
  },
  button: {
    height: 55,
    backgroundColor: styles.colors.buttonPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...styles.texts.button1,
  },
});
