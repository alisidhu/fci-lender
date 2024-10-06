import React, { useState } from 'react';
import { View, Text, StyleSheet, Appearance, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/constants/Colors';

const colorScheme = Appearance.getColorScheme();
const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

interface Item {
    id: number;
    type: string;
    title: string;
    icon: string;
}
const DashboardScreen = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, type: 'loanListing', title: 'Loan Listing', icon: 'list-alt' },
        { id: 2, type: 'loanDetail', title: 'Loan Detail', icon: 'info-circle' },
        { id: 3, type: 'paymentHistory', title: 'Payment History', icon: 'history' },
        { id: 4, type: 'charges', title: 'Charges', icon: 'list-alt' },
        { id: 5, type: 'statements', title: 'Statements', icon: 'info-circle' },
        { id: 6, type: 'onlinePayment', title: 'Online Payment', icon: 'history' },
        { id: 7, type: 'payOffReq', title: 'PayOff Request', icon: 'info-circle' },
        { id: 8, type: 'settings', title: 'Settings', icon: 'history' },
        // Add more items as needed
    ]);


    const renderItem = ({ item }: { item: Item }) => {
        return (
            <TouchableOpacity style={styles.menuItem} onPress={() => navigateToScreen(item)}>
                <FontAwesome5 name={item.icon} size={24} color={colors.primary} />
                <Text style={styles.menuItemText}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    const navigateToScreen = (item: Item) => {
        // Implement navigation logic here based on the item type
        console.log('Navigating to:', item);
    };

    return (
        <View >
            <RedContainerCard />
            <FlatList
                style={styles.contentContainer}
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={styles.columnWrapper}
                // Convert item.id to string
                numColumns={2} />
        </View>

    )
};


const RedContainerCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                {/* Notification Icon */}
                <TouchableOpacity style={styles.notificationIconContainer}>
                    <Ionicons name="notifications-outline" size={24} color="white" />
                </TouchableOpacity>

                {/* Texts and Location */}
                <View style={styles.textContainer}>
                    <Text style={styles.greetingText}>Hi, Ali</Text>
                    <View style={styles.locationContainer}>
                        <Ionicons name="location-sharp" size={16} color="yellow" />
                        <Text style={styles.locationText}>New York</Text>
                    </View>
                </View>
            </View>

            {/* Search Input with Icons */}
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#FFFF"
                />

                {/* Search Icon */}
                <TouchableOpacity style={styles.searchIconContainer}>
                    <FontAwesome5 name="search" size={18} color="#FFFF" />
                </TouchableOpacity>
                <View style={styles.verticalLine} /> 

                {/* Filter Icon */}
                <TouchableOpacity style={styles.filterIconContainer}>
                    <FontAwesome5 name="sliders-h" size={18} color="#FFFF" />
                </TouchableOpacity>
            </View>

        </View>
    );
};
const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 300,
        backgroundColor: colors.primary
    },
    greeting: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    location: {
        color: 'white',
        fontSize: 14,
    },
    searchButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    filterButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    contentContainer: {
        margin: 20,
    },
    menuItems: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    menuItem: {
        width: '48%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    menuItemText: {
        fontSize: 14,
        marginTop: 5,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    successMessage: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'green', // You can customize the color
    },
    countdown: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'red', // Replace with your desired color
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    columnWrapper: {
        justifyContent: 'space-between', // Adjust spacing between columns
    },
    rowContainer: {
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center', // Vertically center the notification icon and text
        marginBottom: 20,
    },
    container: {
        backgroundColor: colors.primary,
        padding: 20,
        marginBottom: 20,
        borderRadius: 0,
        height: 200,
        position: 'relative',
    },
    notificationIconContainer: {
        position: 'absolute',
        right: 10,
        backgroundColor: 'transparent',
        borderColor: '#d3d3d3',
        borderWidth: 1,
        borderRadius: 50,
        padding: 15,
        marginRight: 15, // Add space between the icon and the text
    },
    textContainer: {
        marginBottom: 20,
    },
    greetingText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationText: {
        fontSize: 16,
        color: 'white',
        marginLeft: 5,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: 'white', // White input text color
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Transparent background with 20% opacity
        borderRadius: 8,
        paddingLeft: 40, // Add padding to make space for the search icon
        paddingRight: 40, // Add padding for the filter icon on the right
        height: 50,
        borderWidth: 1,     // Adding border width
        borderColor: 'white',
    },
    searchIconContainer: {
        position: 'absolute',
        left: 10, // Position it on the left side
        top: 12, // Adjust vertically to align with the input
    },
    filterIconContainer: {
        position: 'absolute',
        right: 10
    },
    verticalLine: {
        width: 1,           // Width of the vertical line
        backgroundColor: 'white', // Color of the line
        height: '80%',     // Full height of the container
        marginRight: 10, 
      },
});
export default DashboardScreen;