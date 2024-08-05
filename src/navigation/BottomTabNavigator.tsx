import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import SettingScreen from '@screens/SettingScreen';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeIcon = ({focused}: {focused: boolean}) => (
  <AntDesign color={focused ? 'black' : 'gray'} name="home" size={24} />
);

const SettingIcon = ({focused}: {focused: boolean}) => (
  <AntDesign color={focused ? 'black' : 'gray'} name="setting" size={24} />
);
const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabel: () => {
          return null;
        },
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />

      <BottomTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: SettingIcon,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
