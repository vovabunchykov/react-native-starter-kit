import {StyleSheet} from 'react-native';

import styles from '../../constants/styles';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
    width: 150,
  },
  languages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    marginTop: 10,
  },
  text: {
    ...styles.texts.body1,
  },
});
