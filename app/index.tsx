import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import {Text, View} from 'react-native';
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-pblack">Aditya!</Text>
      <StatusBar style="auto"/>
      <Link href="/(tabs)home" style={{color:'blue'}}>Go to Home</Link>
    </View>
  );
};