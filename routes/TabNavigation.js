import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons"; // Don't forget to import the icon library
import DriversMaps from "../src/maps/drivers-maps";
import Maps from "../src/maps/maps";
import SettingsPage from "../src/settings/settings-page";
import UsersHomeStack from "./UserHome";
import { useColorScheme, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  // Detect the color scheme (light or dark mode)
  const colorScheme = useColorScheme();

  // Define the colors for dark mode
  const darkModeColors = {
    text: "#ECEDEE",
    background: "#151718",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: "#3B82F6", // Same as blue-500 tint
    tabBarBackground: "#151718", // Dark background color
  };

  // Define the colors for light mode
  const lightModeColors = {
    text: "#000000",
    background: "#FFFFFF",
    tabIconDefault: "gray",
    tabIconSelected: "#3B82F6", // Blue-500
    tabBarBackground: "#FFFFFF", // Light background color
  };

  // Choose colors based on the detected color scheme
  const colors = colorScheme === "dark" ? darkModeColors : lightModeColors;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Map") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart-outline"; // love icon
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          // Return the appropriate icon
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.tabIconSelected, // Active icon color
        tabBarInactiveTintColor: colors.tabIconDefault, // Inactive icon color
        tabBarStyle: {
          backgroundColor: colors.tabBarBackground, // Background color for tab bar
          borderTopColor: colors.tabIconDefault, // Border color to match icons
        },
        tabBarLabelStyle: { fontSize: 10 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={UsersHomeStack} />
      <Tab.Screen name="Map" component={Maps} />
      <Tab.Screen name="Favorites" component={DriversMaps} />
      <Tab.Screen name="Settings" component={SettingsPage} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
