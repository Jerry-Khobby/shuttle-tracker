import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const OtpVerification = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [otp, setOtp] = useState("");

  return (
    <SafeAreaView
      className={`flex-1 ${isDarkMode ? "bg-[#151718]" : "bg-white"} pt-10`}
    >
      {/* Navigation Icon */}
      <TouchableOpacity
        className="mb-5 px-4 pt-5"
        onPress={() => navigation.goBack()}
      >
        <Ionicons
          name="arrow-back"
          size={26}
          color={isDarkMode ? "white" : "black"}
        />
      </TouchableOpacity>

      {/* Page Title */}
      <View className="px-6">
        <Text
          className={`text-3xl font-semibold ${
            isDarkMode ? "text-white" : "text-slate-800"
          }`}
        >
          Verify OTP
        </Text>
      </View>

      {/* OTP Input Section */}
      <View className="flex-1 justify-center items-center px-6">
        <Text
          className={`text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } mb-4`}
        >
          Enter the 6-digit code sent to your email
        </Text>

        <TextInput
          className={`w-full text-center p-4 border-2 text-xl tracking-widest ${
            isDarkMode
              ? "border-gray-700 bg-gray-800 text-white"
              : "border-gray-300 bg-white text-black"
          } rounded-md`}
          placeholder="000000"
          placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
          keyboardType="numeric"
          maxLength={6}
          value={otp}
          onChangeText={setOtp}
        />

        {/* Confirm Button */}
        <TouchableOpacity
          className="w-full bg-blue-500 mt-6 py-3 rounded-md"
          onPress={() => {
            // Handle OTP verification logic here
            navigation.navigate("NextScreen"); // Replace "NextScreen" with your actual screen
          }}
        >
          <Text className="text-white font-bold text-center">Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerification;
