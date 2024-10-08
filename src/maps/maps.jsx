import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";

const Maps = () => {
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row items-center p-4 bg-white shadow-md pt-10">
        {/* Navigation Arrow */}
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        {/* Centered Title */}
        <View className="flex-1 justify-center items-center">
          <Text className="text-2xl font-bold">Bus Tracker</Text>
        </View>
      </View>

      {/* Search Box Container */}
      <View className="absolute top-24 left-0 right-0 flex-row justify-center z-10">
        {/* Search Input with Icon */}
        <View className="flex-row items-center bg-white w-11/12 p-2 rounded-md shadow-md">
          <Icon
            name="search"
            size={20}
            color="#555"
            style={{ marginLeft: 10 }}
          />
          <TextInput
            placeholder="Search route"
            className="ml-2 flex-1"
            style={{
              height: 35, // Increased height
              paddingVertical: 0, // Remove extra vertical padding
              zIndex: 10, // Ensuring it stays above the map
              elevation: 10, // Android-specific zIndex workaround
            }}
          />
        </View>
      </View>

      {/* Google Map */}
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* You can add Markers here */}
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Bus Stop"
          description="This is a bus stop"
        />
      </MapView>
    </View>
  );
};

export default Maps;
