import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
const router = useRouter();

const carouselData = [
    {
      title: 'Carousel 1 Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Carousel 2 Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Carousel 3 Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const TutorialScreen = () => {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to the Tutorial</Text>
        {/* <Carousel
          data={carouselData}
          renderItem={({ item, index }) => (
            <View style={styles.carouselItem}>
              <Text style={styles.carouselTitle}>{item.title}</Text>
              <Text style={styles.carouselText}>{item.text}</Text>
            </View>
          )}
          sliderWidth={300}
          itemWidth={300}
        /> */}
        <Button onPress={() => router.navigate('/LoginScreen')}>Get Started</Button>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    carouselItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    carouselTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    carouselText: {
      fontSize: 16,
    },
  });