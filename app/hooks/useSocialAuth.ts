import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {

    const [loadingStartagy, setLoadingStratagy] = useState<string | null>(null);

    const { startSSOFlow } = useSSO();

    const handleSocailAuth = async (strategy: "oauth_google" | "oauth_apple" | "oauth_github") => {
        if (loadingStartagy) return;
        setLoadingStratagy(strategy);
        try {
            const { createdSessionId, setActive } = await startSSOFlow({ strategy });
            if (!createdSessionId || !setActive) {
                const provider = strategy === "oauth_google" ? "Google" : strategy === "oauth_apple" ? "apple" : "github";
                Alert.alert("Sign-in incomplete", `${provider} sign-in did not complete.please try again`);
                return;
            }
            await setActive({ session: createdSessionId });
        } catch (error) {
            console.log("Error in social auth:", error);
            const provider = strategy === "oauth_google" ? "Google" : strategy === "oauth_apple" ? "apple" : "github";
            Alert.alert("Error", `Failed to sign in with ${provider}.please try again.`);
        }
        finally {
            setLoadingStratagy(null);
        }
    }
    return { handleSocailAuth, loadingStartagy };
}

export default useSocialAuth;