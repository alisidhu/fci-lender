import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function TabLayout() {
  return (
    <Stack >
      <Stack.Screen
        name="MySplashScreen"
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        options={{ headerBackTitleVisible: false }}
      />

      <Stack.Screen
        name="ForgotUserNameScreen"
        options={{ headerBackTitleVisible: false }}
      />
      <Stack.Screen
        name="tabs"
        options={{ headerBackTitleVisible: false }}
      />
    </Stack>
  );
}
function CustomHeader() {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    </View>
  );
}