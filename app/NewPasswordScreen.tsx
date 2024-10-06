import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this installed
import { authStyles } from '@/components/styles/AuthStyle';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { useRouter } from 'expo-router';

const NewPasswordScreen = () => {
    const navigation = useNavigation(); // Get the navigation prop
    const router = useRouter();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

    const passwordInputRef = useRef<TextInput>(null);

    useEffect(() => {
        validatePassword(); // Validate password whenever it changes
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardVisible(false);
        });
        // Cleanup the listeners on unmount
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [password, confirmPassword]);

    const validatePassword = () => {
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            setIsPasswordValid(false);
        } else if (password !== confirmPassword) {
            setPasswordError('Passwords do not match');
            setIsPasswordValid(false);
        } else {
            setPasswordError('');
            setIsPasswordValid(true);
        }
    };

    const handlePasswordSubmit = () => {
        if (isPasswordValid) {
            // Handle password submission
            router.navigate('/PasswordSuccessScreen');

            console.log('Password changed successfully');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView contentContainerStyle={authStyles.container}>
                <View style={authStyles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={authStyles.backButton}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={authStyles.welcomeBack}>New Password!</Text>
                <Text style={authStyles.subText}>Your password must be different from the previous one.</Text>

                <View style={authStyles.inputContainer}>
                    <View style={authStyles.innerInputContainer}>
                        <Ionicons name="lock-closed-outline" size={24} color="gray" style={authStyles.icon} />
                        <TextInput
                            style={authStyles.input}
                            placeholder="Password"
                            value={password}
                            placeholderTextColor="#A9A9A9"
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            ref={passwordInputRef}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="gray" style={authStyles.eyeIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={authStyles.subText}>Your password needs to be at least 8 characters long.Include some words and pharase to make it even safer</Text>

                <View style={authStyles.inputContainer}>
                    <View style={authStyles.innerInputContainer}>
                        <Ionicons name="lock-closed-outline" size={24} color="gray" style={authStyles.icon} />
                        <TextInput
                            style={authStyles.input}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            placeholderTextColor="#A9A9A9"
                            onChangeText={setConfirmPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="gray" style={authStyles.eyeIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Show error message based on conditions */}
                {passwordError ? <Text style={authStyles.error}>{passwordError}</Text> : null}

              
                    {/* Conditionally render the continue button based on keyboard visibility */}
                    {!isKeyboardVisible && (
                        <TouchableOpacity style={[authStyles.buttonForgotPassword, { opacity: isPasswordValid ? 1 : 0.5 }]} onPress={handlePasswordSubmit}>
                            <Text style={authStyles.buttonText}>Continue</Text>
                        </TouchableOpacity>
                    )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewPasswordScreen;
