import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="MySplashScreen" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="LoginScreen" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="ForgotPasswordScreen" 
        options={{ headerShown: false }} 
      />
      
      <Stack.Screen 
        name="ForgotUserNameScreen" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="tabs" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}
