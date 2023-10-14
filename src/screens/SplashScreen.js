import { View, SafeAreaView, StatusBar, Image, Text } from "react-native";
import React, { useLayoutEffect, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";   
import { IMAGES, ROUTES } from "../constants";

export default function SplashScreen() {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        NavigationBar.setBackgroundColorAsync("#307a59");
      }, []);

      useEffect(() => {
        const interval = setTimeout(() => {
          navigation.navigate(ROUTES.IntroScreen1);
        }, 3000);
    
        return () => {
          clearTimeout(interval);
        };
      }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#307a59] items-center justify-center">
        <StatusBar barStyle="light-content" backgroundColor="#307a59" />
        <View className="items-center space-y-2">
            <Image source={IMAGES.logo} className="w-14 h-14" />
            <Text className="text-white text-[35px] font-bold">Delicious</Text>
        </View>
    </SafeAreaView>
  )
}