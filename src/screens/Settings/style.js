import {StyleSheet} from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: styles.colors.backgroundSecondary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  h1: {
    ...styles.texts.h1,
  },

  logout: {
    marginTop: 20,
  },
});
