import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const OtpVerification = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move focus to the next input if a digit is entered
    if (text && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    // Handle backspace to move focus to the previous input
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <SafeAreaView
      className={`flex-1 ${isDarkMode ? "bg-[#151718]" : "bg-white"} pt-10`}
    >
      {/* Top Bar with Navigation Icon and Heading */}
      <View className="flex flex-row items-center justify-start w-full px-5 mt-5">
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={isDarkMode ? "white" : "black"}
          />
        </Pressable>
        <Text
          className={`text-2xl font-bold text-center flex-1 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Verification Code
        </Text>
      </View>

      {/* OTP Input Boxes */}
      <View className="flex-row justify-center space-x-2 items-center mt-20 mb-8">
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            value={digit}
            onChangeText={(text) => handleChangeText(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="numeric"
            maxLength={1}
            className={`w-14 h-14 text-center border-2 text-2xl rounded-md  ${
              isDarkMode
                ? "border-gray-700 bg-gray-800 text-white"
                : "border-gray-300 bg-white text-black"
            }`}
          />
        ))}
      </View>

      {/* Confirm Button */}
      <View className="w-full px-5">
        <TouchableOpacity
          className="bg-blue-500 py-3 rounded-md h-11"
          onPress={() => navigation.navigate("MaintabNavigation")}
        >
          <Text className="text-white font-bold text-center">Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerification;
