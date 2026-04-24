import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useSocialAuth from "../hooks/useSocialAuth";

export default function AuthScreen() {
    const { handleSocailAuth, loadingStartagy } = useSocialAuth();
    return (
        <View className="flex-1 bg-background">
            {/* Gradient Background */}
            <View className="absolute inset-0">
                <LinearGradient colors={[
                    "#0F0E17", "#1A1A2E", "#2D1B69", "#1A1A2E", "#0F0E17",
                ]}
                    locations={[0, 0.25, 0.5, 0.75, 1]}
                    style={{ width: "100%", height: "100%" }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                >
                </LinearGradient>
            </View>

            <SafeAreaView className="flex-1">
                <View className="w-16 h-16 rounded-[20px] bg-primary/15 items-center justify-center border border-primary/20">
                                <Ionicons name="school" size={30} color="#A29BFE"/>
                </View>
                <Text className="text-3xl font-extrabold text-foreground tracking-tight mt-4 font-mono">StudyBuddy</Text>
                <Text className="text-3xl font-extrabold text-foreground-muted text-[15px] mt-1.5 tracking-wide">Learn Together , grow together</Text>

            </SafeAreaView>
        </View>
    )
}