import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

const LoginScreen = () => {
  const navigation = useNavigation(); // Use useNavigation to access the navigation object
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
      className={`flex-1 ${isDarkMode ? "bg-black" : "bg-white"} pt-14`}
    >
      <View className="items-center justify-center space-y-8 px-6">
        {/* Heading */}
        <Text className={`text-3xl font-bold ${headingColor}`}>
          Bus Tracker
        </Text>

        {/* Logo */}
        <View className="flex items-center justify-center">
          <Image
            source={require("../../assets/church-logo.jpg")}
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
