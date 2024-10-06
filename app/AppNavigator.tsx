import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './DashboardScreen';
import OrderPaymentScreen  from './DashboardScreen';
import PayoffScreen  from './DashboardScreen';
import StatementsScreen  from './DashboardScreen';
import AccountScreen  from './DashboardScreen';
import { StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>

    <Tab.Navigator
    
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f8f8f8', // Change to your desired color
          borderTopColor: '#e0e0e0', // Change to your desired color
        },
        tabBarActiveTintColor: '#C72A26', // Color when tab is selected
        tabBarInactiveTintColor: 'gray', // Color when tab is not selected
        headerShown: false, // Hide header for all tabs

      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order Payment"
        component={OrderPaymentScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Payoff"
        component={PayoffScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Statements"
        component={StatementsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>

  );
};



export default AppNavigator;
