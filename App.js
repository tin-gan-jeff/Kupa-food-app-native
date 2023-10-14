import { TailwindProvider } from 'tailwindcss-react-native';
import Authentication from './src/navigations/Authentication';
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NativeBaseProvider } from "native-base";
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <TailwindProvider>
      <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <Authentication />
        </SafeAreaProvider>
      </NavigationContainer>
      </NativeBaseProvider>
    </TailwindProvider>
    </GestureHandlerRootView>
  );
}
