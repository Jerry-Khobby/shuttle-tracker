import React from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  Alert,
  useColorScheme,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SettingsPage = () => {
  const colorScheme = useColorScheme(); // Detect system color scheme (light or dark)
  const isDarkMode = colorScheme === "dark"; // Check if it's dark mode

  return (
    <ScrollView
      className={`flex-1 p-4 pt-10 ${isDarkMode ? "bg-[#151718]" : "bg-white"}`} // Change background color based on dark mode
    >
      {/* Heading */}
      <Text
        className={`text-4xl font-bold mb-6 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Settings
      </Text>

      {/* Profile Section */}
      <Text
        className={`text-xl font-semibold mb-4 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        Profile
      </Text>

      {/* Name */}
      <View className="mb-6">
        <Text
          className={`text-base font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Name
        </Text>
        <View className="flex flex-row items-center justify-between">
          <Text
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Alex
          </Text>
          <Pressable onPress={() => Alert.alert("Navigate to name change")}>
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </Pressable>
        </View>
      </View>

      {/* Email */}
      <View className="mb-6">
        <Text
          className={`text-base font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Email
        </Text>
        <View className="flex flex-row items-center justify-between">
          <Text
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            jerrymardeburg@gmail.com
          </Text>
          <Pressable onPress={() => Alert.alert("Navigate to email settings")}>
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </Pressable>
        </View>
      </View>

      {/* Password */}
      <View className="mb-6">
        <Text
          className={`text-base font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Password
        </Text>
        <View className="flex flex-row items-center justify-between">
          <Text
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            .................
          </Text>
          <Pressable onPress={() => Alert.alert("Navigate to password change")}>
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </Pressable>
        </View>
      </View>

      {/* App Settings Section */}
      <Text
        className={`text-xl font-semibold mt-8 mb-4 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        App Settings
      </Text>

      {/* Notifications */}
      <View className="mb-6">
        <Text
          className={`text-base font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Notifications
        </Text>
        <View className="flex flex-row items-center justify-between">
          <Text
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Manage your notifications
          </Text>
          <Pressable
            onPress={() => Alert.alert("Navigate to notification settings")}
          >
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </Pressable>
        </View>
      </View>

      {/* Language */}
      <View className="mb-6">
        <Text
          className={`text-base font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Language
        </Text>
        <View className="flex flex-row items-center justify-between">
          <Text
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            English
          </Text>
          <Pressable
            onPress={() => Alert.alert("Navigate to language settings")}
          >
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </Pressable>
        </View>
      </View>

      {/* About Section */}
      <Text
        className={`text-xl font-semibold mt-8 mb-4 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        About
      </Text>

      {/* About the App */}
      <View className="mb-6">
        <Text
          className={`text-base font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          About
        </Text>
        <View className="flex flex-row items-center justify-between">
          <Text
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Learn about the app
          </Text>
          <Pressable onPress={() => Alert.alert("Navigate to about page")}>
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </Pressable>
        </View>
      </View>

      {/* Logout */}
      <View className="mb-6">
        <Text
          className={`text-base font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Logout
        </Text>
        <View className="flex flex-row items-center justify-between">
          <Text
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            You'll be logged out of this device
          </Text>
          <Pressable onPress={() => Alert.alert("Logging out")}>
            <Icon
              name="chevron-forward-outline"
              size={24}
              color={isDarkMode ? "white" : "black"}
            />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsPage;
