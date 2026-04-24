import { Text, View, TouchableOpacity } from "react-native";
import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Index() {
  const {toggleDarkMode} = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Welcome to the app</Text>

      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Theme</Text>
      </TouchableOpacity>
  
    </View>
  );
}
