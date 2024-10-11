import React from "react";
import { View, Text, Pressable, Image, useColorScheme } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import carImage from "../../assets/car.png";

const SelectShuttle = () => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <View className={`flex-1 ${isDarkMode ? "bg-[#151718]" : "bg-white"}`}>
      {/* Header with Icon and Centered Title */}
      <View className="flex flex-row items-center justify-between w-full px-5 absolute top-10">
        {/* Back Icon */}
        <Pressable
          onPress={() => navigation.navigate("PickUpDropOff")}
          className="flex-1"
        >
          <Icon
            name="arrow-back"
            size={24}
            color={isDarkMode ? "white" : "black"}
          />
        </Pressable>

        {/* Centered Title */}
        <View className="flex-1 items-center">
          <Text
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Select Bus
          </Text>
        </View>

        {/* Empty space for alignment */}
        <View className="flex-1" />
      </View>

      {/* Bus Details */}
      <View className="flex flex-col mt-28 px-5 space-y-4">
        {/* First Bus */}
        <View className="flex flex-row items-center justify-between w-full">
          <View className="flex flex-row items-start space-x-3">
            <Image source={carImage} style={{ width: 40, height: 40 }} />

            <View>
              <Text
                className={`font-bold text-lg ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                BusNumber
              </Text>
              <Text
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                route
              </Text>
            </View>
          </View>
          <View
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } px-3 py-1 rounded-md`}
          >
            <Text
              className={`text-sm ${isDarkMode ? "text-white" : "text-black"}`}
            >
              5 mins
            </Text>
          </View>
        </View>

        {/* Second Bus */}
        <View className="flex flex-row items-center justify-between w-full">
          <View className="flex flex-row items-start space-x-3">
            <Image source={carImage} style={{ width: 40, height: 40 }} />

            <View>
              <Text
                className={`font-bold text-lg ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                BusNumber
              </Text>
              <Text
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                route
              </Text>
            </View>
          </View>
          <View
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-200"
            } px-3 py-1 rounded-md`}
          >
            <Text
              className={`text-sm ${isDarkMode ? "text-white" : "text-black"}`}
            >
              7 mins
            </Text>
          </View>
        </View>
      </View>

      {/* Track Button */}
      <View className="absolute bottom-10 w-full items-center">
        <Pressable
          onPress={() => navigation.navigate("Map")}
          className={`w-4/5 py-3 rounded-md ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        >
          <Text className="text-white font-bold text-lg text-center">
            Track
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SelectShuttle;
