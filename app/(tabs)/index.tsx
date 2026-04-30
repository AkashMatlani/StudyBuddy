import { useAuth } from '@clerk/expo';
import * as Sentry from "@sentry/react-native";
import React from 'react';
import { Button, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
    const { isSignedIn,isLoaded,signOut } = useAuth();
  
    return (
        <SafeAreaView>
            <Pressable onPress={()=>signOut()}>
            <Text>Sign Out</Text>
            <Button title='Try!' onPress={ () => { Sentry.captureException(new Error('First error')) }}/>
          </Pressable>
        </SafeAreaView>
    )
}

export default ChatScreen;