import { Image, StyleSheet, Platform } from 'react-native';

import { SafeAreaView } from 'react-native';
import MySplashScreen from '../MySplashScreen';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
     <StatusBar hidden />
     <MySplashScreen/>
  </View>
  
  );
}
