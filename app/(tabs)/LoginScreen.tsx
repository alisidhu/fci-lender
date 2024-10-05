import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView, Appearance } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this installed
import { Colors } from '@/constants/Colors';
// Get the initial color scheme (light or dark)
const colorScheme = Appearance.getColorScheme();
const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const passwordInputRef = useRef<TextInput>(null);

    const validateEmail = (email: string) => {
        // Regular expression for validating email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleEmailSubmit = () => {
        // Validate email and set error message if invalid
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            return;
        } else {
            setEmailError(''); // Clear error if valid
            passwordInputRef.current?.focus(); // Focus on password field
        }
    };


    const handleSignIn = () => {
        // Handle sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>FCI Lender{"\n"}Services, Inc</Text>
                <Text style={styles.welcomeBack}>Welcome back!</Text>
                <Text style={styles.subText}>Please enter your details.</Text>

                <View style={styles.inputContainer}>
                    <View style={styles.innerInputContainer}>
                        <Ionicons name="mail-outline" size={24} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={email}
                            placeholderTextColor="#A9A9A9"
                            onChangeText={setEmail}
                            onSubmitEditing={handleEmailSubmit} // Handle submission
                            returnKeyType="next" // Show 'Next' on keyboard
                            blurOnSubmit={false} // Do not dismiss keyboard yet        
                        />
                    </View>
                </View>
                {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

                <View style={styles.inputContainer}>
                    <View style={styles.innerInputContainer}>
                        <Ionicons name="lock-closed-outline" size={24} color="gray" style={styles.icon} />
                        <TextInput
                            style={styles.input}
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
                            <Ionicons name={showPassword ? "eye-off-outline" : "eye-outline"} size={24} color="gray" style={styles.eyeIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.checkboxContainer}>
                    <TouchableOpacity
                        style={[styles.checkbox, rememberMe && styles.checkboxChecked]}
                        onPress={() => setRememberMe(!rememberMe)}
                    >
                        {rememberMe && <Text style={styles.checkboxMark}>✔</Text>}
                    </TouchableOpacity>
                    <Text style={styles.rememberMeText}>Remember Me</Text>
                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.orContainer}>
                    <View style={styles.line} />
                    <Text style={styles.orText}>Or</Text>
                    <View style={styles.line} />
                </View>

                <TouchableOpacity style={styles.createAccount}>
                    <Text style={styles.createAccountText}>Create Account</Text>
                </TouchableOpacity>

                <View style={styles.forgotUsernameContainer}>
                    <TouchableOpacity>
                        <Text style={styles.forgotUsername}>Forgot username?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: colors.secondary,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.primary, // FCI text color
    },
    welcomeBack: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subText: {
        fontSize: 16,
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 15
    },
    inputLabel: {
        fontSize: 16,
        marginBottom: 5,
        color: colors.hintColor,
    },
    innerInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.borderColor, // Same border color as the text input
        borderRadius: 5,
    },
    input: {
        flex: 1,
        height: 50,
        paddingHorizontal: 10,
    },
    icon: {
        padding: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: colors.borderColor, // Same border color as the text input
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    checkboxChecked: {
        backgroundColor: colors.secondary, // Background color when checked
    },
    checkboxMark: {
        color: colors.secondary, // Color of the checkmark
        fontSize: 10,
    },
    rememberMeText: {
        marginLeft: 2,
        fontSize: 16,
        flex: 1,
    },
    forgotPassword: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.borderColor,
    },
    orText: {
        paddingHorizontal: 10,
        fontSize: 16,
    },
    createAccount: {
        borderColor: colors.borderColor, // Same as text input border color
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    createAccountText: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    forgotUsernameContainer: {
        position: 'absolute',  // Position it at the bottom
        bottom: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    forgotUsername: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    eyeIcon: {
        marginRight: 10, // Use marginLeft instead of padding
        justifyContent: 'center', // Center the icon vertically
    },
    error: {
        color: colors.primary,
        marginBottom: 12,
        alignSelf: 'flex-start', // Aligns error message to the start
    },
});


export default LoginScreen;
