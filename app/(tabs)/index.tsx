import { useAuth } from '@clerk/expo';
import * as Sentry from "@sentry/react-native";
import React from 'react';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
    const { isSignedIn,isLoaded } = useAuth();
  
    return (
        <SafeAreaView>
            <Button title='Try!' onPress={ () => { Sentry.captureException(new Error('First error')) }}/>
        </SafeAreaView>
    )
}

export default ChatScreen;