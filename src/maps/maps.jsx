import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";

const Maps = () => {
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row items-center p-4 bg-white shadow-md">
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-xl font-bold ml-4">Bus Tracker</Text>
      </View>

      {/* Search Box */}
      <View className="flex-row items-center p-4 bg-gray-100 mx-4 my-4 rounded-full">
        <Icon name="search" size={20} color="#555" />
        <TextInput placeholder="Search route" className="ml-2 flex-1" />
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
