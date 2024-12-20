import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";
import * as Linking from "expo-linking";

const LoginScreen = () => {
  const [result, setResult] = useState(null);
  const navigation = useNavigation();

  const _handlePressButtonAsync = async () => {
    try {
      // Open the authentication URL with correct redirect URL
      let result = await WebBrowser.openAuthSessionAsync(
        "https://shuttle-tracker-backend.onrender.com/auth/google", // Your auth URL
        "shuttle://your-app-scheme" // Your redirect URL (should match your deep link)
      );

      setResult(result);

      // Listen for redirect event
      const handleRedirect = async ({ url }) => {
        console.log(url); // Log the redirect URL for debugging

        // Check if the URL contains the token parameter (ensure your backend sends this)
        if (url && url.includes("shuttle://your-app-scheme")) {
          const params = new URLSearchParams(url.split("?")[1]);
          const token = params.get("token");

          if (token) {
            console.log("Received token:", token); // Log the token
            // Store the token in AsyncStorage for further use
            await AsyncStorage.setItem("authToken", token);

            // Navigate to the next screen after token extraction
            navigation.navigate("MaintabNavigation");
          } else {
            console.error("Token not found in the URL");
            // Optionally, show an error message if token is not found
          }
        }
      };

      // Listen for URL changes (redirect back to app)
      Linking.addEventListener("url", handleRedirect);

      // Cleanup the event listener when done
      return () => {
        Linking.removeEventListener("url", handleRedirect);
      };
    } catch (error) {
      console.log("Error during Google Sign-in", error);
    }
  };

  const GoToDriversLogin = () => {
    navigation.navigate("DriverLogin");
  };

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  // Dynamically set colors based on the theme
  const textColor = isDarkMode ? "text-white" : "text-slate-800";
  const headingColor = isDarkMode ? "text-white" : "text-slate-800";
  const subheadingColor = isDarkMode ? "text-gray-300" : "text-slate-800";

  return (
    <SafeAreaView
      className={`flex-1 ${isDarkMode ? "bg-[#151718]" : "bg-white"} pt-20`}
    >
      <View className="items-center justify-center space-y-8 px-6 pt-10">
        {/* Heading */}
        <Text className={`text-3xl font-bold ${headingColor}`}>
          Bus Tracker
        </Text>
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
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-md h-11"
            onPress={_handlePressButtonAsync}
          >
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
