import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";

const Maps = () => {
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle zooming in
  const zoomIn = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2,
    }));
  };

  // Function to handle zooming out
  const zoomOut = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  };

  // Function to handle searching for a place
  const onSearch = () => {
    if (searchQuery.trim()) {
      setRegion({
        latitude: 37.7749, // Example coordinates (San Francisco)
        longitude: -122.4194,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

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
        <View className="flex-row items-center bg-white w-11/12 p-2 rounded-md shadow-md">
          <Icon
            name="search"
            size={20}
            color="#555"
            style={{ marginLeft: 10 }}
          />
          <TextInput
            placeholder="Search route"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={onSearch}
            className="ml-2 flex-1"
            style={{
              height: 35,
              paddingVertical: 0,
              zIndex: 10,
              elevation: 10,
            }}
          />
        </View>
      </View>

      {/* Google Map */}
      <MapView
        style={{ flex: 1 }}
        region={region}
        onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="Bus Stop"
          description="This is a bus stop"
        />
      </MapView>

      {/* Zoom and Navigation Buttons */}
      <View className="absolute right-5 top-1/2 transform -translate-y-1/2 z-10">
        <View className="bg-white p-2 rounded-md shadow-md flex-col items-center">
          {/* Zoom In Button */}
          <TouchableOpacity onPress={zoomIn} style={styles.zoomButton}>
            <Text className="text-2xl font-bold">+</Text>
          </TouchableOpacity>
          {/* Thin line separator */}
          <View
            style={{
              height: 1,
              width: "80%",
              backgroundColor: "#ddd",
              marginVertical: 8,
            }}
          />
          {/* Zoom Out Button */}
          <TouchableOpacity onPress={zoomOut} style={styles.zoomButton}>
            <Text className="text-2xl font-bold">-</Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Button */}
        <TouchableOpacity style={[styles.zoomButton, { marginTop: 16 }]}>
          <Icon name="navigate" size={30} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  zoomButton: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 8, // Reduced padding to make it shorter
    marginBottom: 8, // Adjusted margin for spacing
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Maps;
