import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MapView, { Marker } from "react-native-maps";

const DriversMaps = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const zoomIn = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta / 2,
      longitudeDelta: prevRegion.longitudeDelta / 2,
    }));
  };

  const zoomOut = () => {
    setRegion((prevRegion) => ({
      ...prevRegion,
      latitudeDelta: prevRegion.latitudeDelta * 2,
      longitudeDelta: prevRegion.longitudeDelta * 2,
    }));
  };

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
    <View className={`flex-1 ${isDarkMode ? "bg-[#151718]" : "bg-white"}`}>
      {/* Header */}
      <View
        className={`flex-row items-center p-4 shadow-md pt-10 ${
          isDarkMode ? "bg-[#151718]" : "bg-white"
        }`}
      >
        {/* Navigation Arrow */}
        <TouchableOpacity>
          <Icon
            name="arrow-back"
            size={24}
            color={isDarkMode ? "#fff" : "#000"}
          />
        </TouchableOpacity>
        {/* Centered Title */}
        <View className="flex-1 justify-center items-center">
          <Text
            className={`text-2xl font-bold ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Bus Tracker
          </Text>
        </View>
      </View>

      {/* Search Box Container */}
      <View className="absolute top-24 left-0 right-0 flex-row justify-center z-10">
        <View
          className={`flex-row items-center w-11/12 p-2 rounded-md shadow-md ${
            isDarkMode ? "bg-[#151718]" : "bg-white"
          }`}
        >
          <Icon
            name="search"
            size={20}
            color={isDarkMode ? "#ccc" : "#555"}
            style={{ marginLeft: 10 }}
          />
          <TextInput
            placeholder="Search route"
            placeholderTextColor={isDarkMode ? "#ccc" : "#555"}
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={onSearch}
            className="ml-2 flex-1"
            style={{
              height: 35,
              color: isDarkMode ? "#fff" : "#000",
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
      <View className="absolute right-5 top-1/3 transform -translate-y-1/2 z-10">
        <View
          className={`p-2 rounded-md shadow-md flex-col items-center ${
            isDarkMode ? "bg-[#151718]" : "bg-white"
          }`}
        >
          {/* Zoom In Button */}
          <TouchableOpacity onPress={zoomIn} style={styles.zoomButton}>
            <Text
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              +
            </Text>
          </TouchableOpacity>
          {/* Thin line separator */}
          <View
            style={{
              height: 1,
              width: "80%",
              backgroundColor: isDarkMode ? "#555" : "#ddd",
              marginVertical: 8,
            }}
          />
          {/* Zoom Out Button */}
          <TouchableOpacity onPress={zoomOut} style={styles.zoomButton}>
            <Text
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              -
            </Text>
          </TouchableOpacity>
        </View>

        {/* Navigation Button */}
        <TouchableOpacity
          style={[
            styles.zoomButton,
            { marginTop: 16, backgroundColor: isDarkMode ? "#151718" : "#fff" },
          ]}
        >
          <Icon
            name="navigate"
            size={30}
            color={isDarkMode ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      </View>

      {/* Shift Time, Rounds Completed, and Total Rounds Container */}
      <View className="absolute -bottom-3 left-0 right-0 p-4 shadow-md rounded-t-lg ">
        <View className="flex-row justify-between items-center space-x-4">
          <View
            className={`flex-1 rounded-md p-4 ${
              isDarkMode ? "bg-[#151718]" : "bg-gray-100"
            }`}
          >
            <View className="flex-row justify-between">
              <View>
                <Text
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Shift time
                </Text>
                <Text
                  className={`font-bold text-lg ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  00:05:00
                </Text>
              </View>
              <View>
                <Text
                  className={`text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Rounds completed
                </Text>
                <Text
                  className={`font-bold text-lg ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  3
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Total Rounds */}
        <View
          className={`mt-4 w-full rounded-md p-4 ${
            isDarkMode ? "bg-[#151718]" : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-sm ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Total rounds
          </Text>
          <Text
            className={`font-bold text-lg ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            15
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  zoomButton: {
    // Default for both light and dark modes
    borderRadius: 25,
    padding: 8,
    marginBottom: 8,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default DriversMaps;
