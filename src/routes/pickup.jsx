import React, { useState } from "react";
import { View, Text, Pressable, useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const PickUpDropOff = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null); // Track which option is selected
  const theme = useColorScheme(); // Detect the current theme (light or dark)

  return (
    <View
      className={`flex-1 ${
        theme === "dark" ? "bg-[#151718]" : "bg-white"
      } items-center justify-center`}
    >
      {/* Back Arrow and Heading */}
      <View className="flex flex-row items-center justify-start w-full px-5 absolute top-10">
        <Pressable onPress={() => navigation.navigate("SelectRoute")}>
          <Icon
            name="arrow-back"
            size={24}
            color={theme === "dark" ? "white" : "black"}
          />
        </Pressable>
        <Text
          className={`text-2xl font-bold text-center flex-1 ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          PickUp DropOff
        </Text>
      </View>

      {/* Select Pickup and Select DropOff */}
      <View className="flex-col space-y-4 w-full px-5">
        {/* Pickup Pressable */}
        <Pressable
          onPress={() => navigation.navigate("SelectPickUp")} // Navigate to SelectPickUp screen
          className={`p-4 border rounded-lg items-center w-full ${
            selected === "pickup"
              ? "bg-blue-200"
              : theme === "dark"
              ? "bg-gray-700"
              : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-center text-lg ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Select PickUp
          </Text>
        </Pressable>

        {/* DropOff Pressable */}
        <Pressable
          onPress={() => navigation.navigate("DropOff")} // Navigate to DropOff screen
          className={`p-4 border rounded-lg items-center w-full ${
            selected === "dropoff"
              ? "bg-blue-200"
              : theme === "dark"
              ? "bg-gray-700"
              : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-center text-lg ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Select DropOff
          </Text>
        </Pressable>
      </View>

      {/* Done Button */}
      <Pressable
        onPress={() => navigation.navigate("SelectShuttle")}
        className="bg-blue-400 py-2 rounded-lg w-11/12 mt-4 h-12 text-center"
      >
        <Text className="text-center text-white text-lg">Done</Text>
      </Pressable>
    </View>
  );
};

export default PickUpDropOff;
