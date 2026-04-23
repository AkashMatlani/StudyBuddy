import { Text, View } from "react-native";

import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
import "../global.css";
export default function Index() {

  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-rose-400">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
