import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
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
                <View>
                    <View className="items-center" pt-10 pb-20>
                        <View className="w-16 h-16 rounded-[20px] bg-primary/15 items-center justify-center border border-primary/20">
                            <Ionicons name="school" size={30} color="#A29BFE" />
                        </View>
                        <Text className="text-3xl font-extrabold text-foreground tracking-tight mt-4 font-mono">StudyBuddy</Text>
                        <Text className="text-3xl font-extrabold text-foreground-muted text-[15px] mt-1.5 tracking-wide">Learn together , grow together</Text>
                    </View>

                    <View className="items-center px-6 mt-4">
                        <Image source={require("../../assets/images/auth.png")}
                            style={{ width: 320, height: 350 }}
                            contentFit="cover"
                        />
                    </View>

                    <View className="flex-row  flex-wrap justify-center gap-3  mt-5 px-6">
                        {/* Feature  */}
                        {[
                            {
                                icon:"videocam" as const,
                                label:"Video Calls",
                                color:"#A29BFE",
                                bg:"bg-primary/12 border-primary/20"
                            },
                            {
                                icon:"chatbubbles" as const,
                                label:"Study Rooms",
                                color:"#FF6B6B",
                                bg:"bg-accent/12 border-accent/20",
                            },
                              {
                                icon:"people" as const,
                                label:"Find Partners",
                                color:"#00B894",
                                bg:"bg-accent-secondary/12 border-accent-secondary/20",
                            },
                        ].map((chip)=>(
                            <View
                            key={chip.label}
                            className={`flex-row items-center gap-1.5  px-3.5 py-2  rounded-full border ${chip.bg}`}>
                                <Ionicons name={chip.icon} size={14} color={chip.color}/>
                                <Text className="text-foreground-muted text-xs font-semibold tracking-wide">
                                    {chip.label}
                                </Text>
                            </View>
                        ))}
                       </View>
                </View>
            </SafeAreaView>
        </View>
    )
}