import { useAuth, useUser } from '@clerk/expo';
import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {

    const { signOut } = useAuth();
    const { user } = useUser();

    return (
        <SafeAreaView className='flex-1 bg-background'>
            {/* Header */}
            <View className='px-5 py-3'>
                <Text className='text-2xl font-bold text-foreground'>Profile</Text>
            </View>

            <View className='items-center py-5'>
                <View className='mb-3.5 relative'>
                    <Image source={user?.imageUrl}
                        style={{ width: 88, height: 88, borderRadius: 44 }}
                        contentFit='contain'
                    />

                    <View className='absolute bottom-[2px] right-[2px] h-[18px] w-[18px] 
                        rounded-[9px] bg-accent-secondary border-[3px] border-background'
                    >
                    </View>
                </View>

                <Text className='text-2xl font-bold text-foreground'>
                    {user?.fullName || user?.username || "student"}
                </Text>
                <Text className='mt-0.5 text-base text-foreground-muted'>
                    {user?.primaryEmailAddress?.emailAddress}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen;