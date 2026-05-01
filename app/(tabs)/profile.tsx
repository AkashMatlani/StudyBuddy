import { COLORS } from '@/lib/theme';
import { useAuth, useUser } from '@clerk/expo';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MENU_ITEMS = [
    { icon: "notification_outline", label: "Notifications", color: COLORS.primary },
    { icon: "notification_outline", label: "Saved Resources", color: COLORS.accent },
    { icon: "notification_outline", label: "Study History", color: COLORS.accentSecondary },
    { icon: "notification_outline", label: "Settings", color: COLORS.textMuted }
];
const ProfileScreen = () => {
    const { signOut } = useAuth();
    const { user } = useUser();

    return (
        <SafeAreaView className='flex-1 bg-background'>
            {/* Header */}
            <View className='px-5 py-3'>
                <Text className='text-2xl font-bold text-foreground'>Profile</Text>
            </View>

            {/* Profile */}
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

            {/* Stats */}
            <View className='flex-row mt-2 mb-6 gap-3 px-5'>
                <View className='items-center flex-1  rounded-2xl border border-border'>
                    <Text className='text-2xl font-bold text-primary'>24</Text>
                    <Text className='mt-1 text-xs text-foreground-muted'>Sessions</Text>
                </View>
                <View className='items-center flex-1  rounded-2xl border border-border'>
                    <Text className='text-2xl font-bold text-primary'>12</Text>
                    <Text className='mt-1 text-xs text-foreground-muted'>Partners</Text>
                </View>
                <View className='items-center flex-1  rounded-2xl border border-border'>
                    <Text className='text-2xl font-bold text-primary'>48h</Text>
                    <Text className='mt-1 text-xs text-foreground-muted'>Study Time</Text>
                </View>
            </View>

            {/* Menu Items */}
            {MENU_ITEMS.map((item, i) => (
                <Pressable
                    key={i}
                    className='mb-1.5 flex-row items-center gap-3.5  
                rounded-xl border border-border bg-surface px-4 py-4'
                >
                    <View className='h-10 w-10 items-center justify-center rounded-xl'
                        style={{ backgroundColor: `${item.color}15` }}>

                        <Ionicons name={item.icon as any} size={22} color={item.color} />
                    </View>
                    <Text className='flex-1 text-base font-medium text-foreground'>{item.label}</Text>
                    <Ionicons name='chevron-forward' size={18} color={COLORS.textSubtle} />
                </Pressable>
            )
            )}

        </SafeAreaView>
    )
}

export default ProfileScreen;