import {
    View,
    SafeAreaView,
    StatusBar,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
  } from "react-native";
  import React, { useState, useLayoutEffect, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import * as NavigationBar from "expo-navigation-bar";
import { IMAGES, ROUTES } from "../constants";
import Iconicon from "react-native-vector-icons/Ionicons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Input, Icon, Stack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function ForgotScreen() {
    const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState("")

  const details = [
    {
        id: 0,
        icon: 'email',
        name: 'Email Address',
        description: "Send to your email address"
    },
    {
        id: 1,
        icon: 'phone',
        name: 'phone Number',
        description: "Send to your phone number"
    }
  ]

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

  let schema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email(),
        // .required(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
    //   .required(),
  });
  const formik = useFormik({
    initialValues: {
        name: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      navigation.navigate(ROUTES);
    },
  });
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView className="flex-1 bg-[#ffffff] py-5">
        <View className="px-3">
        <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Iconicon name="arrow-back" color={'black'} size={30} />
            </TouchableOpacity>

            <View className="my-5">
                <Text className="font-bold text-[25px]">Forgot Password</Text>
                <Text className="text-base text-gray-500">Select which contact details should we use to reset your password</Text>
            </View>
            <View className="mt-4">
            <FlatList
                        data={details}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                          <View>
                            <TouchableOpacity className="w-full pl-4 rounded-sm  justify-center h-24 mb-3" onPress={()=>setDetail(item)} 
                            style={{ 
                              backgroundColor: "#dadbdf", 
                              borderColor: item.name === detail.name ? "#307a59" : "",
                              borderWidth: item.name === detail.name ? 1 : 0, 
                              borderRadius: 2,
                            }}>
                                    <View className="flex-row space-x-5 items-center">
                                        <View style={{
                                            backgroundColor: item.name === detail.name ? "#ebf2ef" : "white",
                                        }} className="w-16 h-16 rounded-full items-center justify-center">
                                            {
                                                item.name === detail.name ? (
                                                    <MaterialIcons name={item.icon} color={"#307a59"} size={30} />
                                                ): (
                                                    <MaterialIcons name={item.icon} color={"gray"} size={30} />
                                                )
                                            }
                                        </View>
                                    <View className="space-y-2">
                                        <Text className="font-semibold text-base">{item.name}</Text>
                                        <Text className="text-gray-500">{item.description}</Text>
                                    </View>
                                    </View>
                                </TouchableOpacity>
                          </View>
                        )}
                        />
            </View>
            
            <TouchableOpacity onPress={()=>navigation.navigate()} className="bg-[#307a59] mt-10 w-[390px] h-12 items-center justify-center rounded-sm">
                    <Text className="text-white text-base font-medium">Continue</Text>
                </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}