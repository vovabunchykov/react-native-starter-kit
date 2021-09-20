import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = {
  colors: {
    backgroundPrimary: '#18181B',
    backgroundSecondary: '#e8e8e8',
    backgroundTertiary: '#ffffff',
    bodyPrimary: '#242424',
    bodySecondary: '#5c5c5c',
    accentPrimary: '#ccff00',
    accentSecondary: '#04e4d7',
    negative: '#ef7c58',
    positive: '#e2ff6d',
    buttonPrimary: '#5c5c5c',
  },
  texts: {
    h1: {
      fontSize: 40,
      // fontFamily: 'Roboto-Bold',
    },
    h2: {
      fontSize: 30,
      // fontFamily: 'Roboto-Bold',
    },
    body1: {
      fontSize: 16,
      // fontFamily: 'Roboto-Regular',
    },
    body2: {
      fontSize: 20,
      // fontFamily: 'Roboto-Regular',
    },
    button1: {
      color: '#ffffff',
      fontSize: 16,
    },
    error: {
      color: '#ef7c58',
      fontSize: 16,
    },
  },
  radius: {
    small: 5,
    normal: 10,
    large: 20,
  },
  dimensions: {
    width,
    height,
  },
};

export default styles;
