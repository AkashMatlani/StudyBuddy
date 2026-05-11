import { studyBuddyTheme } from "@/lib/theme";
import { useUser } from "@clerk/expo";
import type { UserResource } from "@clerk/types";
import React, { useEffect, useRef } from 'react';
import { Chat, OverlayProvider, useCreateChatClient } from "stream-chat-expo";
import FullScreenLoader from "./FullScreenLoader";
const STREAM_API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY!;

const syncUserToStram = async (user: UserResource) => {
    try {
        await fetch("/api/sync-user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: user.id,
                name: user.fullName ?? user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
                image: user.imageUrl,
            })
        })
    } catch (error) {
        console.error("Failed to sync user to stream", error)
    }
}

const ChatClient = ({ children, user }: { children: React.ReactNode, user: UserResource }) => {
    const syncedRef = useRef(false);
    useEffect(() => {
        if (!syncedRef.current) {
            syncedRef.current = true;
            syncUserToStram(user)
        }
    }, [user])

    const tokenProvider = async () => {
        const response = await fetch("/api/token", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ userId: user.id })
        });

        const data = await response.json();
        return data.token;
    }

    const chatCleint = useCreateChatClient({
        apiKey: STREAM_API_KEY,
        userData: {
            id: user.id,
            name: user.fullName ?? user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
            image: user.image
        },
        tokenOrProvider: tokenProvider
    });

    if (!chatCleint) return <FullScreenLoader message="Loading chat..." />

    return (
        <OverlayProvider value={{style:studyBuddyTheme}}>
            <Chat client={chatCleint} style={studyBuddyTheme}>
                {children}
            </Chat>
        </OverlayProvider>
    );
};

const ChatWrapper = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoaded } = useUser();
    if (!isLoaded) return <FullScreenLoader message="Loading chat..." />
    //not signed in -render children directly (auth screens)
    if (!user) return <>{children}</>
    return (
        <ChatClient user={user}>{children}</ChatClient>
    )
}

export default ChatWrapper