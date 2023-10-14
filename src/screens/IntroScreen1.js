import {
    View,
    SafeAreaView,
    StatusBar,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
  } from "react-native";
  import React, { useState, useLayoutEffect, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import * as NavigationBar from "expo-navigation-bar";
import { IMAGES, ROUTES } from "../constants";

export default function IntroScreen1() {
    const navigation = useNavigation();
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("inset-swipe");
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const interval = setTimeout(() => {}, 3000);

    return () => {
      clearTimeout(interval);
    };
  }, []);
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView className="flex-1 bg-[#ffffff] items-center py-10">
        <View className="items-center space-y-12">
            <View className="flex-row space-x-2 items-center">
                <Image source={IMAGES.logo} className="w-10 h-10" />
                <Text className="font-bold text-[20px] mt-4">Delicious</Text>
            </View>
            <View className="border-2 border-solid rounded-full w-72 h-72 p-3 border-[#dadbdf]">
                <Image source={IMAGES.im2} className="w-full h-full rounded-full" />
                <View className="absolute w-20 h-20 -left-[40px] bottom-[110px] rounded-full p-[4px] z-50 bg-white" >
                    <Image source={IMAGES.food1} className="w-full h-full rounded-full" />
                </View>
                <View className="absolute w-10 h-10 right-8 bottom-[16px] rounded-full p-[4px] z-50 bg-white" >
                    <Image source={IMAGES.food2} className="w-full h-full rounded-full" />
                </View>
                <View className="absolute w-14 h-14 right-2 top-[16px] rounded-full p-[4px] z-50 bg-white" >
                    <Image source={IMAGES.food3} className="w-full h-full rounded-full" />
                </View>
            </View>

            <View>
                <View className="items-center">
                    <Text className="font-bold text-[30px]">All your</Text>
                    <Text className="font-bold text-[30px]">favorites foods</Text>
                </View>
                <View className="items-center">
                    <Text className="text-gray-500 text-base">Order your favorite menu with easy,</Text>
                    <Text className="text-gray-500 text-base">on-demand delivery</Text>
                </View>
            </View>
            <View className="flex-row space-x-2">
                <View className="w-[10px] h-[10px] rounded-full bg-[#307a59]"></View>
                <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.IntroScreen2)}>
                    <View className="w-[10px] h-[10px] rounded-full bg-[#ebf2ef]"></View>
                </TouchableOpacity>
            </View>

            <View className="space-y-4">
                <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.IntroScreen2)} className="bg-[#307a59] w-[350px] h-12 items-center justify-center rounded-sm">
                    <Text className="text-white text-base font-medium">Continue</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#ebf2ef] w-[350px] h-12 items-center justify-center rounded-sm">
                    <Text className="text-[#307a59] text-base font-medium">Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    </>
  )
}