import { StyleSheet,Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';
// Get the initial color scheme (light or dark)
const colorScheme = Appearance.getColorScheme();
const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;


export const authStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
    },    
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
        color: colors.borderColor
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
    buttonForgotPassword: {
        position: 'absolute',  // Position it at the bottom
        bottom: 20,
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        left: 15,
        right: 15,
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
    passwordTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black', // New code: changed text color to black
        textAlign: 'center', // New code: center the title
    },
    message: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center', // New code: center the message
        color: 'grey', // New code: change color to grey
    },
    countdown: {
        fontSize: 14,
        marginBottom: 20,
        position: 'absolute', // New code: position countdown above button
        bottom: 70, // New code: adjust position as needed
        left: 0,
        right: 0,
        textAlign: 'center', // New code: center the countdown
    },
      image: {
        width: 200,
        height: 200,
        marginBottom: 20,
      },

});

