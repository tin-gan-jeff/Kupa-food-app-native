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
import Iconicon from "react-native-vector-icons/Ionicons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Input, Icon, Stack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function SignInScreen() {
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

  let schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      navigation.navigate(ROUTES.HomePage);
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
                <Text className="font-bold text-[25px]">Welcome Back</Text>
                <Text className="text-base text-gray-500">Sign in your account</Text>
            </View>
            
            <View
            className="mb-2">
                <Text className="font-bold text-base mb-2">Email</Text>
                <View className="mb-3">
            <Input
              w={{ base: "100%", md: "20%" }}
              size="md"
              borderRadius={2}
              variant={"filled"}
              value={formik.values.email}
              onChangeText={formik.handleChange("email")}
              onBlur={() => formik.setFieldTouched("email")}
              placeholder="Enter Email"
            />
            <View style={{ position: "absolute", top: 45, left: 0 }}>
              {formik.touched.email && formik.errors.email && (
                <Text style={{ fontSize: 12, color: "maroon" }}>
                  {formik.errors.email}
                </Text>
              )}
              </View>
            </View>
            </View>
            <View>
                <Text className="font-bold text-base mb-2">Password</Text>
                <View className="">
                <Input
              w={{ base: "100%", md: "20%" }}
              size="md"
              borderRadius={2}
              value={formik.values.password}
              onChangeText={formik.handleChange("password")}
              variant={"filled"}
              onBlur={() => formik.setFieldTouched("password")}
              type={show ? "text" : "password"}
              InputRightElement={
                <Text style={{ marginRight: 8 }} onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Text>
              }
              mb="3"
              placeholder="Enter Password"
            />
            <View style={{ position: "absolute", bottom: 8, left: 0 }}>
              {formik.touched.password && formik.errors.password && (
                <Text style={{ fontSize: 12, color: "maroon" }}>
                  {formik.errors.password}
                </Text>
              )}
            </View>
            </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.ForgotScreen)}>
                <Text className="text-[#307a59] font-semibold text-base -mt-2 mb-10">Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate()} className="bg-[#307a59] mb-5 w-[390px] h-12 items-center justify-center rounded-sm">
                    <Text className="text-white text-base font-medium">Sign in</Text>
                </TouchableOpacity>
            <View className="flex-row items-center space-x-2 justify-center mb-10">
                <Text className="text-gray-500 text-base">Don't have an account?</Text>
                <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.SignUpScreen)}>
                    <Text className="text-[#307a59] text-base font-medium">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View className="flex-row items-center space-x-3 mb-10">
                <View className="flex-1 h-[1px] bg-slate-500"></View>
                <Text className="text-base text-gray-500">Or with</Text>
                <View className="flex-1 h-[1px] bg-slate-500"></View>
            </View>
        <View className="items-center space-y-3 mt-2">
        <TouchableOpacity onPress={()=>navigation.navigate()} className="border-[1px] border-gray-400 space-x-2 flex-row w-[390px] h-12 items-center justify-center rounded-sm">
          <Image source={IMAGES.google} className="w-8 h-8" />
          <Text className="text-black text-base font-medium">Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate()} className="border-[1px] border-gray-400 space-x-2 flex-row w-[390px] h-12 items-center justify-center rounded-sm">
          <Image source={IMAGES.apple} className="w-8 h-8" />
          <Text className="text-black text-base font-medium">Sign in with Apple</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}