import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white mt-14">
      <View className="items-center justify-center space-y-8 px-6">
        {/* Heading */}
        <Text className="text-3xl font-bold text-slate-800">Bus Tracker</Text>

        {/* Logo */}
        <Image source={require('../../assets/church-logo.jpg')} className="w-96 h-96" />

        {/* Signin Text */}
        <Text className="text-2xl font-semibold text-slate-800 font-serif">Sign in to continue</Text>


        {/* Buttons */}
        <View className="w-full space-y-4">
          <TouchableOpacity className="bg-blue-500 py-3 rounded-md h-11">
            <Text className="text-white font-bold text-center">Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-slate-200 py-3 rounded-md h-11">
            <Text className="text-black font-bold text-center">Login as a Driver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;