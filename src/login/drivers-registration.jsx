import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  useColorScheme,
  Image,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

const DriverRegistration = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [licenseImage, setLicenseImage] = useState(null);

  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setLicenseImage(result.uri);
    }
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Driver registered:", {
      firstName,
      surname,
      email,
      password,
      licenseNumber,
      yearsOfExperience,
      licenseImage,
    });
  };

  return (
    <SafeAreaView
      className={`flex-1 ${isDarkMode ? "bg-[#151718]" : "bg-white"} pt-10`}
    >
      <View className="flex-row items-center justify-center px-4 mb-5">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 20 }}
        >
          <Ionicons
            name="arrow-back"
            size={26}
            color={isDarkMode ? "white" : "black"}
          />
        </TouchableOpacity>
        <Text
          className={`text-3xl pt-5 font-semibold ${
            isDarkMode ? "text-white" : "text-slate-800"
          }`}
        >
          Driver Registration
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        className="px-6"
      >
        <View className="items-center justify-center space-y-8 mt-4">
          <View className="w-full space-y-4">
            <TextInput
              className={`w-full p-4 border ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md`}
              placeholder="First Name"
              placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              className={`w-full p-4 border ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md`}
              placeholder="Surname"
              placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
              value={surname}
              onChangeText={setSurname}
            />
            <TextInput
              className={`w-full p-4 border ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md`}
              placeholder="Email"
              placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
              value={email}
              onChangeText={setEmail}
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
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              className={`w-full p-4 border ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md`}
              placeholder="Confirm Password"
              placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TextInput
              className={`w-full p-4 border ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md`}
              placeholder="License Number"
              placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
              value={licenseNumber}
              onChangeText={setLicenseNumber}
            />
            <TextInput
              className={`w-full p-4 border ${
                isDarkMode
                  ? "border-gray-700 bg-gray-800 text-white"
                  : "border-gray-300 bg-white text-black"
              } rounded-md`}
              placeholder="Years of Experience"
              placeholderTextColor={isDarkMode ? "gray" : "darkgray"}
              keyboardType="numeric"
              value={yearsOfExperience}
              onChangeText={setYearsOfExperience}
            />
            <TouchableOpacity
              className="p-4 border rounded-md flex-row items-center justify-center"
              style={{
                borderColor: isDarkMode ? "gray" : "darkgray",
                backgroundColor: isDarkMode ? "#3A3B3C" : "#F3F4F6",
              }}
              onPress={handleImageUpload}
            >
              <Ionicons
                name="image"
                size={24}
                color={isDarkMode ? "white" : "black"}
              />
              <Text
                className="ml-2"
                style={{ color: isDarkMode ? "white" : "black" }}
              >
                Upload License Image
              </Text>
            </TouchableOpacity>
            {licenseImage && (
              <Image
                source={{ uri: licenseImage }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 8,
                  marginTop: 10,
                }}
              />
            )}
          </View>

          <TouchableOpacity
            className="bg-blue-500 py-3 rounded-md w-full h-12"
            onPress={handleRegister}
          >
            <Text className="text-white font-bold text-center">Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DriverRegistration;
