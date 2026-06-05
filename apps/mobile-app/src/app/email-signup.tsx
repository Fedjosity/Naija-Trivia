import React from 'react';
import { View, Text, Pressable, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

export default function EmailSignupScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
          {/* Top Decorative Lights */}
          <View className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          <View className="absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

          {/* Header */}
          <Animated.View entering={FadeInDown.delay(100)} className="items-center py-12 z-10">
            <View className="flex-row items-center gap-3">
              <View className="w-12 h-12 bg-secondary rounded-xl items-center justify-center shadow-lg shadow-secondary/30">
                <MaterialIcons name="workspace-premium" size={28} color="#3c2f00" />
              </View>
              <Text className="font-headline font-extrabold text-2xl tracking-tight text-on-surface">
                Daily Naija Trivia
              </Text>
            </View>
          </Animated.View>

          {/* Main Card */}
          <View className="px-6 pb-20 z-10 flex-1 justify-center">
            <Animated.View entering={FadeInUp.delay(300)} className="w-full max-w-md self-center">
              <BlurView intensity={25} tint="dark" className="p-8 md:p-10 rounded-[2rem] bg-[#353a38]/40 border border-[#e9c349]/10 overflow-hidden shadow-2xl">
                {/* Highlight Accent */}
                <View className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 blur-xl rounded-full" />

                <View className="mb-10 items-center">
                  <Text className="font-headline text-3xl font-bold mb-3 text-on-surface text-center">
                    Join the Archive
                  </Text>
                  <Text className="text-on-surface-variant font-body leading-relaxed text-center">
                    Secure your place in the royal arena. Prestige awaits.
                  </Text>
                </View>

                {/* Form */}
                <View className="gap-6">
                  {/* Full Name */}
                  <View className="gap-2">
                    <Text className="text-xs font-semibold uppercase tracking-widest text-secondary/80 ml-1">
                      Full Name
                    </Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="person" size={24} color="#bfc9c4" className="absolute left-4 z-10" />
                      <TextInput 
                        className="w-full bg-surface-container-highest rounded-xl py-4 pl-12 pr-4 text-on-surface font-body text-base border border-transparent focus:border-secondary/50"
                        placeholder="Chidi Adebayo"
                        placeholderTextColor="rgba(191, 201, 196, 0.4)"
                      />
                    </View>
                  </View>

                  {/* Email */}
                  <View className="gap-2">
                    <Text className="text-xs font-semibold uppercase tracking-widest text-secondary/80 ml-1">
                      Email Address
                    </Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="mail" size={24} color="#bfc9c4" className="absolute left-4 z-10" />
                      <TextInput 
                        className="w-full bg-surface-container-highest rounded-xl py-4 pl-12 pr-4 text-on-surface font-body text-base border border-transparent focus:border-secondary/50"
                        placeholder="chidi@archive.ng"
                        placeholderTextColor="rgba(191, 201, 196, 0.4)"
                        keyboardType="email-address"
                        autoCapitalize="none"
                      />
                    </View>
                  </View>

                  {/* Password */}
                  <View className="gap-2">
                    <Text className="text-xs font-semibold uppercase tracking-widest text-secondary/80 ml-1">
                      Password
                    </Text>
                    <View className="relative justify-center">
                      <MaterialIcons name="lock" size={24} color="#bfc9c4" className="absolute left-4 z-10" />
                      <TextInput 
                        className="w-full bg-surface-container-highest rounded-xl py-4 pl-12 pr-12 text-on-surface font-body text-base border border-transparent focus:border-secondary/50"
                        placeholder="••••••••••••"
                        placeholderTextColor="rgba(191, 201, 196, 0.4)"
                        secureTextEntry
                      />
                      <Pressable className="absolute right-4 z-10 p-2">
                        <MaterialIcons name="visibility" size={20} color="#bfc9c4" />
                      </Pressable>
                    </View>
                  </View>

                  {/* Submit Button */}
                  <View className="pt-4">
                    <Pressable 
                      onPress={() => router.push('/pick-path')}
                      className="w-full bg-secondary text-on-secondary rounded-xl py-5 flex-row items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-secondary/30"
                    >
                      <Text className="font-headline font-bold text-lg text-on-secondary">
                        Create Account
                      </Text>
                      <MaterialIcons name="arrow-forward" size={20} color="#3c2f00" />
                    </Pressable>
                  </View>
                </View>

                {/* Footer Links */}
                <View className="mt-10 items-center gap-4">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-on-surface-variant text-sm">Already a member?</Text>
                    <Pressable onPress={() => router.back()}>
                      <Text className="text-secondary font-bold text-sm">Back to Login</Text>
                    </Pressable>
                  </View>

                  <View className="flex-row items-center gap-2 mt-2">
                    <MaterialIcons name="verified-user" size={14} color="rgba(191, 201, 196, 0.3)" />
                    <Text className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/30">
                      Secure Encrypted Authentication
                    </Text>
                  </View>
                </View>
              </BlurView>
            </Animated.View>
          </View>

          {/* Footer Icons */}
          <Animated.View entering={FadeInDown.delay(500)} className="absolute bottom-8 left-0 right-0 flex-row justify-center gap-8 z-0">
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="history-edu" size={16} color="rgba(191, 201, 196, 0.4)" />
              <Text className="text-on-surface-variant/40 text-xs">Heritage Verified</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <MaterialIcons name="policy" size={16} color="rgba(191, 201, 196, 0.4)" />
              <Text className="text-on-surface-variant/40 text-xs">Privacy Protocol</Text>
            </View>
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
