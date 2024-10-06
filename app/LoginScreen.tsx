import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Appearance } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this installed
import { Colors } from '@/constants/Colors';
import { authStyles } from '@/components/styles/AuthStyle';
import { useRouter } from 'expo-router';

const LoginScreen = () => {
    const [email, setEmail] = useState('ali@gmail.com');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const passwordInputRef = useRef<TextInput>(null);
    const router = useRouter();

    const validateEmail = (email: string) => {
        // Regular expression for validating email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const handleEmailSubmit = () => {
        // Validate email
    //    if (email.trim() === '') {
      //      setEmailError('Enter your registered email');
         if (!validateEmail(email)) {
            setEmailError('Invalid email address');
        } else {

            setEmailError(''); // Clear error if valid
            passwordInputRef.current?.focus(); // Focus on password field
            console.log("go to dashboard");

        }
    };

    const handleSignIn = () => {
        // Handle sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
        router.navigate('/AppNavigator'); // Cast to string type

    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={authStyles.container}>
                <Text style={authStyles.title}>FCI Lender{"\n"}Services, Inc</Text>
                <Text style={authStyles.welcomeBack}>Welcome back!</Text>
                <Text style={authStyles.subText}>Please enter your details.</Text>

                <View style={authStyles.inputContainer}>
                    <View style={authStyles.innerInputContainer}>
                        <Ionicons name="mail-outline" size={24} color="gray" style={authStyles.icon} />
                        <TextInput
                            style={authStyles.input}
                            placeholder="Email"
                            value={email}
                            placeholderTextColor="#A9A9A9"
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            keyboardType="email-address" // This enables the email keyboard
                            onSubmitEditing={handleEmailSubmit} // Handle submission
                            returnKeyType="next" // Show 'Next' on keyboard
                            blurOnSubmit={false} // Do not dismiss keyboard yet        
                        />
                    </View>
                </View>
                {/* Show error message based on conditions */}
                {email === '' ? (
                    <Text style={authStyles.subText}>Enter your registered email</Text>
                ) : emailError ? (
                    <Text style={authStyles.error}>{emailError}</Text>
                ) : null}

                <View style={authStyles.inputContainer}>
                    <View style={authStyles.innerInputContainer}>
                        <Ionicons name="lock-closed-outline" size={24} color="gray" style={authStyles.icon} />
                        <TextInput
                            style={authStyles.input}
                            placeholder="Password"
                            value={password}
                            placeholderTextColor="#A9A9A9"
                            onChangeText={setPassword}
                            returnKeyType="go" // Show 'Done' on keyboard
                            blurOnSubmit={true} // Optional: Dismiss keyboard after submission    
                            secureTextEntry={!showPassword} // Toggle visibility
                            ref={passwordInputRef} // Assign ref to the password input
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="gray" style={authStyles.eyeIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={authStyles.checkboxContainer}>
                    <TouchableOpacity
                        style={[authStyles.checkbox, rememberMe && authStyles.checkboxChecked]}
                        onPress={() => setRememberMe(!rememberMe)}
                    >
                        {rememberMe && <Text style={authStyles.checkboxMark}>✔</Text>}
                    </TouchableOpacity>
                    <Text style={authStyles.rememberMeText}>Remember Me</Text>
                    <TouchableOpacity
                    onPress={() =>
                        router.navigate('/ForgotPasswordScreen') // Cast to string type

                    }>
                        <Text style={authStyles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[authStyles.button, { opacity: validateEmail(email) ? 1 : 0.5 }]} // Change opacity based on email validation
                    onPress={handleSignIn}
                    disabled={!validateEmail(email)}>
                    <Text style={authStyles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={authStyles.orContainer}>
                    <View style={authStyles.line} />
                    <Text style={authStyles.orText}>Or</Text>
                    <View style={authStyles.line} />
                </View>

                <TouchableOpacity style={authStyles.createAccount}>
                    <Text style={authStyles.createAccountText}>Create Account</Text>
                </TouchableOpacity>

                <View style={authStyles.forgotUsernameContainer}>
                    <TouchableOpacity
                             onPress={() =>
                                router.navigate('/ForgotUserNameScreen') // Cast to string type
        
                            }>
                        <Text style={authStyles.forgotUsername}>Forgot username?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};



export default LoginScreen;
