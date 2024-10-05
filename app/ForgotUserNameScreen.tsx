import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Appearance } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this installed
import { Colors } from '@/constants/Colors';
import { authStyles } from '@/components/styles/AuthStyle';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const ForgotPasswordScreen = () => {
    const navigation = useNavigation(); // Get the navigation prop

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email: string) => {
        // Regular expression for validating email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailSubmit = () => {
        // Validate email
        if (email.trim() === '') {
            setEmailError('Enter your registered email');
        } else if (!validateEmail(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError(''); // Clear error if valid
            // Call the function to handle valid email input
            handleSignIn();
        }
    };


    const handleSignIn = () => {
        // Handle sign-in logic here
        console.log('Email:', email);
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={authStyles.container}>
            <View style={authStyles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={authStyles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={authStyles.welcomeBack}>Forgot UserName!</Text>
                <Text style={authStyles.subText}>Please enter your registerd email to get registered username.</Text>

                <View style={authStyles.inputContainer}>
                    <View style={authStyles.innerInputContainer}>
                        <Ionicons name="mail-outline" size={24} color="gray" style={authStyles.icon} />
                        <TextInput
                            style={authStyles.input}
                            placeholder="Email"
                            value={email}
                            placeholderTextColor="#A9A9A9"
                            onChangeText={setEmail}
                            keyboardType="email-address" // This enables the email keyboard
                            onSubmitEditing={handleEmailSubmit} // Handle submission
                            returnKeyType="done" // Show 'Next' on keyboard
                            blurOnSubmit={true} // Do not dismiss keyboard yet        
                        />
                    </View>
                </View>

                {/* Show error message based on conditions */}
                {email === '' ? (
                    <Text style={authStyles.subText}>Enter your registered email</Text>
                ) : emailError ? (
                    <Text style={authStyles.error}>{emailError}</Text>
                ) : null}




                <TouchableOpacity
                    style={[authStyles.buttonForgotPassword, { opacity: validateEmail(email) ? 1 : 0.5 }]} // Change opacity based on email validation
                    onPress={handleEmailSubmit}
                    disabled={!validateEmail(email)}>
                    <Text style={authStyles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

    );
};



export default ForgotPasswordScreen;
