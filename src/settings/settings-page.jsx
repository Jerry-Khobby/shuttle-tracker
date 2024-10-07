import React from "react";
import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SettingsPage = () => {
  return (
    <ScrollView className="flex-1 bg-white p-4 pt-10">
      {/* Heading */}
      <Text className="text-4xl font-bold mb-6">Settings</Text>

      {/* Profile Section */}
      <Text className="text-xl font-semibold mb-4">Profile</Text>

      {/* Name */}
      <View className="mb-6">
        <Text className="text-base font-semibold">Name</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-gray-500 text-sm">Alex</Text>
          <Pressable onPress={() => Alert.alert("Navigate to name change")}>
            <Icon name="chevron-forward-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      {/* Email */}
      <View className="mb-6">
        <Text className="text-base font-semibold">Email</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-gray-500 text-sm">
            jerrymardeburg@gmail.com
          </Text>
          <Pressable onPress={() => Alert.alert("Navigate to email settings")}>
            <Icon name="chevron-forward-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      {/* Password */}
      <View className="mb-6">
        <Text className="text-base font-semibold">Password</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-gray-500 text-sm">.................</Text>
          <Pressable onPress={() => Alert.alert("Navigate to password change")}>
            <Icon name="chevron-forward-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      {/* App Settings Section */}
      <Text className="text-xl font-semibold mt-8 mb-4">App Settings</Text>

      {/* Notifications */}
      <View className="mb-6">
        <Text className="text-base font-semibold">Notifications</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-gray-500 text-sm">
            Manage your notifications
          </Text>
          <Pressable
            onPress={() => Alert.alert("Navigate to notification settings")}
          >
            <Icon name="chevron-forward-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      {/* Language */}
      <View className="mb-6">
        <Text className="text-base font-semibold">Language</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-gray-500 text-sm">English</Text>
          <Pressable
            onPress={() => Alert.alert("Navigate to language settings")}
          >
            <Icon name="chevron-forward-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      {/* About Section */}
      <Text className="text-xl font-semibold mt-8 mb-4">About</Text>

      {/* About the App */}
      <View className="mb-6">
        <Text className="text-base font-semibold">About</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-gray-500 text-sm">Learn about the app</Text>
          <Pressable onPress={() => Alert.alert("Navigate to about page")}>
            <Icon name="chevron-forward-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>

      {/* Logout */}
      <View className="mb-6">
        <Text className="text-base font-semibold">Logout</Text>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-gray-500 text-sm">
            You'll be logged out of this device
          </Text>
          <Pressable onPress={() => Alert.alert("Logging out")}>
            <Icon name="chevron-forward-outline" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingsPage;
