// @flow
import {StyleSheet} from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  container: {
    width: '90%',
  },
  title: {
    ...styles.texts.body1,
  },
  textInput: {
    height: 50,
    paddingLeft: 10,
    borderBottomWidth: 1,
    borderColor: styles.colors.backgroundSecondary,
    backgroundColor: styles.colors.backgroundTertiary,
    ...styles.texts.body1,
  },
  error: {
    marginTop: 10,
    ...styles.texts.body1,
    color: styles.colors.negavive,
  },
});
