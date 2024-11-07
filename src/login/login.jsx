import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons"; // Assuming you're using Expo
import { useNavigation } from "@react-navigation/native";

const DriverLogin = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  return (
    <SafeAreaView
      className={`flex-1 ${isDarkMode ? "bg-[#151718]" : "bg-white"} pt-10`}
    >
      {/* Navigation Icon */}
      <TouchableOpacity
        className="mb-5 px-4 pt-5"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Ionicons
          name="arrow-back"
          size={26}
          color={isDarkMode ? "white" : "black"}
        />
      </TouchableOpacity>

      <View className="items-center justify-center space-y-8 px-6">
        {/* Heading */}
        <Text
          className={`text-3xl font-semibold ${
            isDarkMode ? "text-white" : "text-slate-800"
          }`}
        >
          Shuttle Driver Login
        </Text>

        {/* Input Fields */}
        <View className="w-full space-y-4">
          <TextInput
            className={`w-full p-4 border ${
              isDarkMode
                ? "border-gray-700 bg-gray-800 text-white"
                : "border-gray-300 bg-white text-black"
            } rounded-md`}
            placeholder="Email"
            placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
          />
          <TextInput
            className={`w-full p-4 border ${
              isDarkMode
                ? "border-gray-700 bg-gray-800 text-white"
                : "border-gray-300 bg-white text-black"
            } rounded-md`}
            placeholder="Password"
            placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
            secureTextEntry
          />
        </View>

        {/* Buttons */}
        <View className="w-full space-y-4 flex-col">
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-md h-11"
            onPress={() => navigation.navigate("OtpVerification")}
          >
            <Text className="text-white font-bold text-center">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-green-500 py-3 rounded-md h-11"
            onPress={() => navigation.navigate("DriverRegistration")}
          >
            <Text className="text-white font-bold text-center">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DriverLogin;
