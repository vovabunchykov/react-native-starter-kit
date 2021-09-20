import {StyleSheet} from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: styles.colors.backgroundSecondary,
  },
  h1: {
    ...styles.texts.h1,
  },
  block: {
    marginTop: 15,
  },
  back: {
    ...styles.texts.body1,
  },
});
