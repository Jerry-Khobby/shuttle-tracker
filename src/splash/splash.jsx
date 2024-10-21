import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase"; // Import auth from the firebase.js file
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

const LoginScreen = () => {
  const navigation = useNavigation();

  const GoToDriversLogin = () => {
    navigation.navigate("DriverLogin");
  };

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  // Dynamically set colors based on the theme
  const textColor = isDarkMode ? "text-white" : "text-slate-800";
  const headingColor = isDarkMode ? "text-white" : "text-slate-800";
  const subheadingColor = isDarkMode ? "text-gray-300" : "text-slate-800";

  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);

  return (
    <SafeAreaView
      className={`flex-1 ${isDarkMode ? "bg-[#151718]" : "bg-white"} pt-20`}
    >
      <View className="items-center justify-center space-y-8 px-6 pt-10">
        {/* Heading */}
        <Text className={`text-3xl font-bold ${headingColor}`}>
          Bus Tracker
        </Text>

        {/* Logo */}
        <View className="flex items-center justify-center">
          <Image
            source={
              isDarkMode
                ? require("../../assets/darkmode-logo.png")
                : require("../../assets/church-logo.png")
            }
            className="w-96 h-96"
          />
        </View>

        {/* Signin Text */}
        <Text
          className={`text-2xl font-semibold font-serif ${subheadingColor}`}
        >
          Sign in to continue
        </Text>

        {/* Buttons */}
        <View className="w-full space-y-4">
          <TouchableOpacity className="bg-blue-500 py-3 rounded-md h-11">
            <Text className="text-white font-bold text-center">
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`bg-slate-200 py-3 rounded-md h-11 ${
              isDarkMode ? "bg-gray-700" : "bg-slate-200"
            }`}
            onPress={GoToDriversLogin}
          >
            <Text
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } font-bold text-center`}
            >
              Login as a Driver
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
