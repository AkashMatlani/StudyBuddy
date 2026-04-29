import { useAuth } from '@clerk/expo';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = () => {
    const { isSignedIn,isLoaded,signOut } = useAuth();
  
    return (
        <SafeAreaView>
            <Pressable onPress={()=>signOut()}>
            <Text>Sign Out</Text>
          </Pressable>
        </SafeAreaView>
    )
}

export default ChatScreen;