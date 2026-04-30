import { useAuth } from '@clerk/expo';
import { Ionicons } from "@expo/vector-icons";
import { Redirect, Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
    const { isSignedIn, isLoaded } = useAuth()
    if (!isLoaded) {
        return null
    }

    if (!isSignedIn) {
        return <Redirect href={'/(auth)'} />
    }
    return (

        <Tabs
            screenOptions=
            {{
                headerShown: false,
                tabBarActiveTintColor:"#6c5CE7",

            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "chat",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="compass-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}
            />

        </Tabs>
    );
}

export default TabsLayout
