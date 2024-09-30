import React, { useState, useRef } from 'react';
import { View, Text, Pressable, TouchableOpacity, Animated } from 'react-native';

const SelectRoute = () => {
  const [selectedRoute, setSelectedRoute] = useState(null);

  const routes = [
    'Commercial Area to KSB 1',
    'Commercial Area to KSB 2',
    'Commercial Area to KSB 3',
    'Commercial Area to KSB 4',
    'Commercial Area to KSB 5',
    'Commercial Area to KSB 6',
    'Commercial Area to KSB 7',
  ];

  // Create fade animation for each route after defining the routes array
  const fadeAnimations = useRef(routes.map(() => new Animated.Value(1))).current;

  const handleRouteSelect = (route, index) => {
    setSelectedRoute(route);

    // Start the fade-out animation for the selected route
    Animated.timing(fadeAnimations[index], {
      toValue: 0,  // End opacity is 0
      duration: 300, // Duration of fade-out
      useNativeDriver: true,  // Use native driver for performance
    }).start(() => {
      // After fade-out is complete, fade in
      Animated.timing(fadeAnimations[index], {
        toValue: 1,  // End opacity back to 1
        duration: 300, // Duration of fade-in
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <View className="flex-1 p-5 mt-10">
      {/* Heading */}
      <Text className="text-2xl font-bold text-center mb-4">Select Route</Text>

      {/* Route options */}
      <View className="flex-col space-y-4">
        {routes.map((route, index) => (
          <Pressable
            key={index}
            onPress={() => handleRouteSelect(route, index)} // Pass index to handle animation for the specific route
            className={`p-4 border rounded-lg items-center w-full ${
              selectedRoute === route ? 'bg-blue-200' : 'bg-gray-100'
            }`}
          >
            <Animated.View style={{ opacity: fadeAnimations[index] }}>
              <Text className="text-lg text-center">{route}</Text>
            </Animated.View>
          </Pressable>
        ))}
      </View>

      {/* Done Button */}
      <View className="mt-6 w-full">
        <TouchableOpacity
          onPress={() => {
            console.log('Selected Route:', selectedRoute);
          }}
          className="bg-blue-500 py-2 w-full rounded-lg"
        >
          <Text className="text-white text-lg text-center">Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectRoute;