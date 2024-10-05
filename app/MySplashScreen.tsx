// app/SplashScreen.tsx

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator,Appearance } from 'react-native';
import { useRouter } from 'expo-router';
import LoaderKit from 'react-native-loader-kit'
import { Colors } from '@/constants/Colors';
// Get the initial color scheme (light or dark)
const colorScheme = Appearance.getColorScheme();
const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

const MySplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/LoginScreen'); // Cast to string type
    }, 5000);

    return () => clearTimeout(timeout); // Cleanup the timeout
  }, [router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> FCI Lender {"\n"}Services, Inc</Text>
      {/* Add your loading indicator here */}
      <ActivityIndicator size="large" color="#FFFFFF" style={styles.loader} />
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary, // Example background color
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF', // Example text color
  },
  loader: {
    position: 'absolute',  // Position it at the bottom
    color: '#FFFFFF', // Example text color
    bottom: 40,
  },
});

export default MySplashScreen;
