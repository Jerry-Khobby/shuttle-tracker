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
  Alert,
  ActivityIndicator,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

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
  const [isLoading, setIsLoading] = useState(false);
  const [licenseImage, setLicenseImage] = useState(null);
  const [mediaPermissionStatus, requestMediaPermission] =
    ImagePicker.useMediaLibraryPermissions();
  const [cameraPermissionStatus, requestCameraPermission] =
    ImagePicker.useCameraPermissions();
  const handleImageOption = async () => {
    Alert.alert(
      "Choose Image Source",
      "Capture a new photo or select from gallery?",
      [
        { text: "Camera", onPress: handleCaptureImage },
        { text: "Gallery", onPress: handleImageUpload },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };
  const handleImageUpload = async () => {
    if (!mediaPermissionStatus?.granted) {
      const permissionResult = await requestMediaPermission();
      if (!permissionResult.granted) {
        Alert.alert(
          "Permission Required",
          "Permission to access the media library is required to upload images.",
          [{ text: "OK" }]
        );
        return;
      }
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.uri) {
      console.log("Selected Image URI:", result.uri); // Debugging log
      setLicenseImage(result.uri);
    } else {
      console.log("Image selection canceled or no URI found");
    }
  };

  const handleCaptureImage = async () => {
    if (!cameraPermissionStatus?.granted) {
      const permissionResult = await requestCameraPermission();
      if (!permissionResult.granted) {
        Alert.alert(
          "Permission Required",
          "Permission to access the camera is required to capture images.",
          [{ text: "OK" }]
        );
        return;
      }
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setLicenseImage(result.assets[0].uri);
    }
  };

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setIsLoading(true);

    try {
      let base64Image = null;
      if (licenseImage) {
        console.log("Reading file from URI:", licenseImage); // Debugging log
        const base64Data = await FileSystem.readAsStringAsync(licenseImage, {
          encoding: FileSystem.EncodingType.Base64,
        });
        base64Image = `data:image/jpeg;base64,${base64Data}`;
      }
      console.log("Base64 Image:", base64Image);
      if (!base64Image) {
        alert("Base64 conversion failed or license image is missing");
        console.error("Base64 conversion failed or license image is missing ");
        return;
      }

      const requestBody = {
        firstName,
        surname,
        email,
        password,
        licenseNumber,
        yearsOfExperience,
        licenseImage: base64Image, // Base64-encoded image
      };

      const response = await fetch(
        "https://shuttle-tracker-backend.onrender.com/auth/signup/drivers",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      const result = await response.json();
      if (!response.ok) {
        // Display backend error message if available
        const errorMessage =
          result.error || result.message || "An error occurred";
        Alert.alert("Error", errorMessage);
      } else {
        // Success response
        Alert.alert(
          "Success",
          "Driver registered successfully!,Check your Email for the verification code"
        );
        navigation.navigate("OtpVerification");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
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

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="flex-1 justify-center items-center"
        />
      ) : (
        <ScrollView
          contentContainerStyle={{ paddingBottom: 20 }}
          className="px-6"
        >
          <View className="items-center justify-center space-y-8 mt-4">
            <View className="w-full space-y-4">
              {/* TextInputs for registration details */}
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
                onPress={handleImageOption}
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
                  Upload License image
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
              className="bg-blue-500 py-3 rounded-md w-full h-12 text-center"
              onPress={handleRegister}
            >
              <Text className="text-white font-bold text-center">Register</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DriverRegistration;
