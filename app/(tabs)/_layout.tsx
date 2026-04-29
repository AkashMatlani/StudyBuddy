import { useAuth } from '@clerk/expo';
import { Ionicons } from "@expo/vector-icons";
import { Redirect } from 'expo-router';
import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
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
    <NativeTabs>
         <NativeTabs.Trigger name="index">
        <Label>Chat</Label>
  <Ionicons name="chatbubble-outline" size={24} color="#fff" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="explore">
        <Label>Explore</Label>
        <Icon sf="safari" drawable="explore" />
      </NativeTabs.Trigger>
       <NativeTabs.Trigger name="profile">
        <Label>Profile</Label>
        <Icon sf="person.fill" drawable="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  
  )
}

export default TabsLayout
