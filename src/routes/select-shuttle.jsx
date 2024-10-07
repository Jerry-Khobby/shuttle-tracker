import React from "react";
import { View, Text, Pressable, Image, Alert } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const SelectShuttle = () => {
  return (
    <View className="flex-1 bg-white">
      {/* Header with Icon and Centered Title */}
      <View className="flex flex-row items-center justify-between w-full px-5 absolute top-10">
        {/* Back Icon */}
        <Pressable
          onPress={() => Alert.alert("We are working on it")}
          className="flex-1"
        >
          <Icon name="arrow-back" size={24} color="black" />
        </Pressable>

        {/* Centered Title */}
        <View className="flex-1 items-center">
          <Text className="text-2xl font-bold">Select Bus</Text>
        </View>

        {/* Empty space for alignment */}
        <View className="flex-1" />
      </View>

      {/* Bus Details */}
      <View className="flex flex-col mt-28 px-5 space-y-4">
        {/* First Bus */}
        <View className="flex flex-row items-center justify-between w-full">
          <View className="flex flex-row items-start space-x-3">
            <Image
              source={{ uri: "bus-image-url" }}
              style={{ width: 40, height: 40 }}
            />
            <View>
              <Text className="font-bold text-lg">BusNumber</Text>
              <Text className="text-gray-500 text-sm">route</Text>
            </View>
          </View>
          <View className="bg-gray-200 px-3 py-1 rounded-md">
            <Text className="text-sm">5 mins</Text>
          </View>
        </View>

        {/* Second Bus */}
        <View className="flex flex-row items-center justify-between w-full">
          <View className="flex flex-row items-start space-x-3">
            <Image
              source={{ uri: "bus-image-url" }}
              style={{ width: 40, height: 40 }}
            />
            <View>
              <Text className="font-bold text-lg">BusNumber</Text>
              <Text className="text-gray-500 text-sm">route</Text>
            </View>
          </View>
          <View className="bg-gray-200 px-3 py-1 rounded-md">
            <Text className="text-sm">7 mins</Text>
          </View>
        </View>
      </View>

      {/* Track Button */}
      <View className="absolute bottom-10 w-full items-center">
        <Pressable
          onPress={() => Alert.alert("Tracking")}
          className="bg-blue-400 w-4/5 py-3 rounded-md"
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
