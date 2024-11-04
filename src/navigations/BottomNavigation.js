import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

// Your screen components
import HomeScreen from '../screens/HomeScreen';
import PlanScreen from '../screens/PlanScreen';
import ForecastScreen from '../screens/ForecastScreen';
import DiagramScreen from '../screens/DiagramScreen';
import {Image, StyleSheet, View} from 'react-native';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: '#6C5DD3',
          tabBarShowLabel: false,
          // headerShown: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <Image
                    source={require('../assests/home.png')}
                    resizeMode="contain"
                  />
                  {focused ? (
                    <View
                      style={{width: 30, height: 2, backgroundColor: '#6C5DD3'}}
                    />
                  ) : null}
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="Plan"
          component={PlanScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <Image
                    source={require('../assests/Plan.png')}
                    resizeMode="contain"
                  />
                  {focused ? (
                    <View
                      style={{width: 30, height: 2, backgroundColor: '#6C5DD3'}}
                    />
                  ) : null}
                </>
              );
            },
            headerTitle: () => {
              return (
                <Image
                  source={require('../assests/logo.png')}
                  style={{width: 130, height: 30}}
                  resizeMode="contain"
                />
              );
            },
            headerLeft: () => (
              <AntDesign name="left" size={24} color="#6C5DD3" />
            ),
            headerRight: () => {
              return (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <AntDesign
                    name="search1"
                    size={21}
                    color="grey"
                    style={{marginRight: 10}}
                  />
                  <Image
                    source={require('../assests/tranmautritam.png')}
                    resizeMode="contain"
                    style={{width: 42, height: 42, marginRight: 10}}
                  />
                </View>
              );
            },
            headerTitleAlign: 'center',
          }}
        />
        <Tab.Screen
          name="Forecast"
          component={ForecastScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <Image
                    source={require('../assests/Forecast.png')}
                    resizeMode="contain"
                  />
                  {focused ? (
                    <View
                      style={{width: 30, height: 2, backgroundColor: '#6C5DD3'}}
                    />
                  ) : null}
                </>
              );
            },
          }}
        />
        <Tab.Screen
          name="Diagram"
          component={DiagramScreen}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  <Image
                    source={require('../assests/Diagram.png')}
                    resizeMode="contain"
                  />
                  {focused ? (
                    <View
                      style={{width: 30, height: 2, backgroundColor: '#6C5DD3'}}
                    />
                  ) : null}
                </>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
