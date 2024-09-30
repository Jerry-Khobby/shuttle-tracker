import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DropOff = () => {
  const [selected, setSelected] = useState(null); // Track which option is selected

  return (
    <View className="flex-1 bg-white items-center justify-center">
      {/* Back Arrow and Heading */}
      <View className="flex flex-row items-center justify-start w-full px-5 absolute top-10">
        <Pressable onPress={() => Alert.alert('We are working on it')}>
          <Icon name="arrow-back" size={24} color="black" />
        </Pressable>
        <Text className="text-2xl font-bold text-center flex-1">
          Select DropOff
        </Text>
      </View>

      {/* Select Pickup and Select DropOff */}
      <View className="flex-col space-y-4 w-full px-5">
        {/* Pickup Pressable */}
        <Pressable
          onPress={() => setSelected('pickup')} // Set 'pickup' as selected
          className={`p-4 border rounded-lg items-center w-full ${
            selected === 'pickup' ? 'bg-blue-200' : 'bg-gray-100'
          }`}
        >
          <Text className="text-center text-lg">KSB Bus Stop</Text>
        </Pressable>

        {/* DropOff Pressable */}
        <Pressable
          onPress={() => setSelected('dropoff')} // Set 'dropoff' as selected
          className={`p-4 border rounded-lg items-center w-full ${
            selected === 'dropoff' ? 'bg-blue-200' : 'bg-gray-100'
          }`}
        >
          <Text className="text-center text-lg">Hall Seven </Text>
        </Pressable>

        <Pressable
          onPress={() => setSelected('dropoff')} // Set 'dropoff' as selected
          className={`p-4 border rounded-lg items-center w-full ${
            selected === 'dropoff' ? 'bg-blue-200' : 'bg-gray-100'
          }`}
        >
          <Text className="text-center text-lg">Brunei </Text>
        </Pressable>
      </View>

      {/* Done Button */}
      <Pressable
        onPress={() => Alert.alert('You are Done')}
        className="bg-blue-400 py-2 rounded-lg w-11/12 mt-4"
      >
        <Text className="text-center text-white text-lg">Done</Text>
      </Pressable>
    </View>
  );
};

export default DropOff;
