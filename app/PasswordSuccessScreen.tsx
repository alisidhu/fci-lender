import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { authStyles } from '@/components/styles/AuthStyle';
import { useRouter } from 'expo-router';

const PasswordSuccessScreen = () => {
    const router = useRouter();

    const [seconds, setSeconds] = useState(4);

    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                clearInterval(timer);
                // Navigate to the sign-in page
                // router.navigate('/LoginScreen');
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    return (
        <View style={authStyles.container}>
            <Text style={authStyles.passwordTitle}>Password Updated!</Text>
            <Text style={authStyles.message}>Your password has been set up {"\n"} successfully.</Text>
            <Text style={authStyles.countdown}>Redirecting sign in page in {seconds} sec</Text>
            <TouchableOpacity style={authStyles.buttonForgotPassword} onPress={() => router.navigate('/LoginScreen')}>
                <Text style={authStyles.buttonText}>Back to Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PasswordSuccessScreen;