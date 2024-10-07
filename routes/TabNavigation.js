import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons"; // Don't forget to import the icon library
import Maps from "../src/maps/maps";
import SelectShuttle from "../src/routes/select-shuttle";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
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
        tabBarActiveTintColor: "#3B82F6", // Tailwind blue-500 hex code
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 10 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={SelectShuttle} />
      <Tab.Screen name="Map" component={Maps} />
      <Tab.Screen name="Favorites" component={Maps} />
      <Tab.Screen name="Settings" component={Maps} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
