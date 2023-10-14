import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../constants";
import { IntroScreen2, IntroScreen1, SplashScreen, SignInScreen, SignUpScreen, VerificationScreen, ForgotScreen } from "../screens";

const Stack = createNativeStackNavigator();

const Authentication = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SplashScreen}>
      <Stack.Screen
        name={ROUTES.SplashScreen}
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.IntroScreen1}
        component={IntroScreen1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.IntroScreen2}
        component={IntroScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SignInScreen}
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.SignUpScreen}
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.VerificationScreen}
        component={VerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.ForgotScreen}
        component={ForgotScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Authentication;
