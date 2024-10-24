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

WebBrowser.maybeCompleteAuthSession();
const LoginScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.CLIENT_ID_ANDROID,
    iosClientId: process.env.CLIENT_ID_IOS,
    webClientId: process.env.WEB_CLIENT_ID,
  });

  useEffect(() => {
    handleSignInGoogleWithGoogle();
  }, [response]);

  async function handleSignInGoogleWithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
    } catch (error) {
      console.log("There was an error");
    }
  };
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
          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-md h-11"
            onPress={() => promptAsync}
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
