import React, { useState } from "react";
import { View, Text, Pressable, Alert, useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DropOff = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null); // Track which option is selected
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View
      className={`flex-1 ${
        isDarkMode ? "bg-[#151718]" : "bg-white"
      } items-center justify-center`}
    >
      {/* Back Arrow and Heading */}
      <View className="flex flex-row items-center justify-start w-full px-5 absolute top-10">
        <Pressable onPress={() => navigation.navigate("PickUpDropOff")}>
          <Icon
            name="arrow-back"
            size={24}
            color={isDarkMode ? "white" : "black"}
          />
        </Pressable>
        <Text
          className={`text-2xl font-bold text-center flex-1 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Select DropOff
        </Text>
      </View>

      {/* Select Pickup and Select DropOff */}
      <View className="flex-col space-y-4 w-full px-5">
        {/* Pickup Pressable */}
        <Pressable
          onPress={() => setSelected("pickup")} // Set 'pickup' as selected
          className={`p-4 border rounded-lg items-center w-full ${
            selected === "pickup"
              ? "bg-blue-200"
              : isDarkMode
              ? "bg-gray-700"
              : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-center text-lg ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            KSB Bus Stop
          </Text>
        </Pressable>

        {/* DropOff Pressable */}
        <Pressable
          onPress={() => setSelected("dropoff")} // Set 'dropoff' as selected
          className={`p-4 border rounded-lg items-center w-full ${
            selected === "dropoff"
              ? "bg-blue-200"
              : isDarkMode
              ? "bg-gray-700"
              : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-center text-lg ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Hall Seven
          </Text>
        </Pressable>

        <Pressable
          onPress={() => setSelected("dropoff")} // Set 'dropoff' as selected
          className={`p-4 border rounded-lg items-center w-full ${
            selected === "dropoff"
              ? "bg-blue-200"
              : isDarkMode
              ? "bg-gray-700"
              : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-center text-lg ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Brunei
          </Text>
        </Pressable>
      </View>

      {/* Done Button */}
      <Pressable
        onPress={() => navigation.navigate("PickUpDropOff")}
        className={`bg-blue-400 py-2 rounded-lg w-11/12 mt-4 h-12 text-center ${
          isDarkMode ? "bg-blue-500" : "bg-blue-400"
        }`}
      >
        <Text className="text-center text-white text-lg">Done</Text>
      </Pressable>
    </View>
  );
};

export default DropOff;
