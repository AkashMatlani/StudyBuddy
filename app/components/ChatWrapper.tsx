import { useUser } from "@clerk/expo";
import type { UserResource } from "@clerk/types";
import React, { useEffect, useRef } from 'react';
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

    return <></>
};
const ChatWrapper = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoaded } = useUser();
    if (!isLoaded) return <FullScreenLoader message="Loading chat..." />
    //not signed in -render children directly (auth screens)
    if (!user) return <>{children}</>
    return (
        <ChatClient user={ user}>{children}</ChatClient>
    )
}

export default ChatWrapper