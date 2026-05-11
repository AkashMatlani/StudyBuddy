import { Pressable, Text, View } from "react-native";

import { useAuth } from "@clerk/expo";
import { Redirect } from "expo-router";
export default function Index() {

  const { isSignedIn,isLoaded,signOut } = useAuth();

  if(!isLoaded) return null;

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

      <Pressable onPress={()=>signOut()}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  );
}
