import {
    View,
    SafeAreaView,
    StatusBar,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    StyleSheet,
    TextInput
  } from "react-native";
  import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
  import { useNavigation } from "@react-navigation/native";
  import * as NavigationBar from "expo-navigation-bar";
import { COLORS, IMAGES, ROUTES } from "../constants";
import Iconicon from "react-native-vector-icons/Ionicons";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Input, Icon, Stack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function VerificationScreen({route}) {
    const navigation = useNavigation();

  const { email } = route.params;
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "" });


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
      <SafeAreaView className="flex-1 bg-[#ffffff] py-5">
        <View className="px-3">
        <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Iconicon name="arrow-back" color={'black'} size={30} />
            </TouchableOpacity>

            <View className="items-center my-5 space-y-2">
                <Text className="text-[25px] font-bold">Verification Email</Text>
                <Text className="text-gray-500">Please enter the code we just sent to email</Text>
                <Text className="font-bold">{email}</Text>
            </View>
            <View style={styles.otpContainer}>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={firstInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 1: text });
                  text && secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={secondInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 2: text });
                  text
                    ? thirdInput.current.focus()
                    : firstInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={thirdInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 3: text });
                  text
                    ? fourthInput.current.focus()
                    : secondInput.current.focus();
                }}
              />
            </View>
            <View style={styles.otpBox}>
              <TextInput
                style={styles.otpText}
                keyboardType="number-pad"
                maxLength={1}
                ref={fourthInput}
                onChangeText={(text) => {
                  setOtp({ ...otp, 4: text });
                  !text && thirdInput.current.focus();
                }}
              />
            </View>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate(ROUTES.VerificationScreen, {email: "ting@gmail.com"})} className="bg-[#307a59] mt-4 mb-5 w-[390px] h-12 items-center justify-center rounded-sm">
                    <Text className="text-white text-base font-medium">Confirm</Text>
                </TouchableOpacity>
                <View className="items-center flex-row space-x-2 justify-center">
                    <Text className="text-gray-500">If you didn't receive any code?</Text>
                    <TouchableOpacity>
                        <Text className="text-[#307a59] font-semibold">Resend</Text>
                    </TouchableOpacity>
                </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    otpContainer: {
      width: "100%",
      marginBottom: 20,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    otpText: {
      fontSize: 25,
      color: COLORS.green,
      backgroundColor: COLORS.lightGreen,
      padding: 0,
      textAlign: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 2,
    },
    optBtn: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "50%",
      alignSelf: "center",
      backgroundColor: "#2A8000",
      height: 40,
      borderRadius: 2,
      marginTop: 30,
    },
    optTxt: {
      textAlign: "center",
      color: COLORS.white,
      fontSize: 18,
      fontSize: 16,
      textTransform: "uppercase",
    },
  });