import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';

import WelcomeScreen from './screens/Welcome';
import MainScreen from './screens/Main';
import SettingsScreen from './screens/Settings';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';
import ResetPasswordScreen from './screens/ResetPassword';
import {AUTH_TOKEN_KEY} from './constants/data';

import assets from './assets';
import styles from './constants/styles';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Welcome">
      <Stack.Screen
        name="Main"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}

const renderTab = (props, label, icon) => {
  const selected = props.accessibilityState.selected;
  return (
    <TouchableOpacity
      {...props}
      style={
        selected ? {...stylesNav.tab, ...stylesNav.activeTab} : stylesNav.tab
      }>
      <Image
        style={{
          ...stylesNav.icon,
          tintColor: selected
            ? styles.colors.bodyPrimary
            : styles.colors.bodySecondary,
        }}
        source={icon}
      />
      <Text
        style={{
          ...stylesNav.label,
          color: selected
            ? styles.colors.bodyPrimary
            : styles.colors.bodySecondary,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: true,
        style: {
          height: 100,
          backgroundColor: styles.colors.backgroundSecondary,
          borderTopColor: styles.colors.bodyPrimary,
          borderTopWidth: 1,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarButton: (props) =>
            renderTab(props, 'Main', assets.icons.HOME_ICON),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarButton: (props) =>
            renderTab(props, 'Settings', assets.icons.SETTINGS_ICON),
        }}
      />
    </Tab.Navigator>
  );
}

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function reset(screen) {
  navigationRef.current?.reset({
    routes: [{name: screen}],
  });
}

export default function Navigation() {
  // const [token, getToken] = useState(null);
  // useEffect(() => {
  //   const checkTokenAsync = async () => {
  //     let userToken;
  //     try {
  //       userToken = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     getToken(userToken);
  //   };
  //
  //   checkTokenAsync();
  // }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
}

const stylesNav = StyleSheet.create({
  tab: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderTopColor: styles.colors.bodyPrimary,
    borderTopWidth: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    ...styles.texts.body3,
    marginTop: 8,
  },
});
