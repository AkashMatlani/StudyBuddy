import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
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
        </View>
    )
}