import { Text, TouchableOpacity, StatusBar, Alert } from "react-native";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { createHomeStyles } from "@/assets/styles/home.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient"
import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";

export default function Index() {
  const {toggleDarkMode, colors} = useTheme();

  const homeStyles = createHomeStyles(colors);

  return (
    <LinearGradient colors={colors.gradients.background} style={homeStyles.container}>
      <StatusBar barStyle={colors.statusBarStyle} />
      
      <SafeAreaView style={homeStyles.safeArea}>
        <Header/>
        <TodoInput/>
        <TouchableOpacity onPress={toggleDarkMode}>
          <Text>Toggle Theme</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}
