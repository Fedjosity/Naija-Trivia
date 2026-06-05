import React from 'react';
import { View, Text, Pressable, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';

export default function JoinEliteScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-surface relative">
      {/* Background Canvas */}
      <View className="absolute inset-0 z-0">
        <ImageBackground
          source={require('../../assets/images/hero/join-elite-bg.jpg')}
          className="absolute inset-0 w-full h-full opacity-40 scale-105"
          blurRadius={10}
        />
        {/* Radial Gradient Substitutes */}
        <View className="absolute inset-0 bg-surface/50" />
      </View>

      <SafeAreaView className="flex-1 z-10 px-6 py-12 justify-center">
        {/* Brand Identity */}
        <Animated.View entering={FadeInDown.delay(100)} className="absolute top-16 left-0 right-0 items-center px-8">
          <MaterialIcons name="history-edu" size={48} color="#e9c349" className="mb-2" />
          <Text className="font-headline text-on-surface text-lg font-bold tracking-widest uppercase">
            Daily Naija Trivia
          </Text>
        </Animated.View>

        {/* Main Onboarding Modal */}
        <Animated.View entering={FadeInDown.delay(300).springify()} className="w-full max-w-lg self-center">
          <BlurView intensity={30} tint="dark" className="p-8 md:p-10 rounded-3xl border border-white/10 overflow-hidden bg-[#353a38]/40 shadow-2xl">
            <View className="items-center mb-10">
              <Text className="font-headline text-4xl font-extrabold text-on-surface mb-4 text-center">
                Claim Your Throne
              </Text>
              <Text className="text-on-surface-variant text-lg text-center">
                Join the elite circle of Nigerian historians and pop-culture gurus.
              </Text>
            </View>

            {/* Social Login Buttons */}
            <View className="gap-4">
              <Pressable className="w-full flex-row items-center justify-center gap-3 bg-white py-4 px-6 rounded-xl shadow-sm active:scale-95 transition-all">
                <MaterialIcons name="apple" size={24} color="black" />
                <Text className="text-black font-semibold text-lg">Sign in with Apple</Text>
              </Pressable>

              <Pressable className="w-full flex-row items-center justify-center gap-3 bg-transparent border border-secondary/50 py-4 px-6 rounded-xl active:scale-95 transition-all">
                <Text className="text-on-surface font-semibold text-lg">Sign in with Google</Text>
              </Pressable>

              <Pressable 
                onPress={() => router.push('/email-signup')}
                className="w-full flex-row items-center justify-center gap-3 bg-surface-container-high py-4 px-6 rounded-xl active:scale-95 transition-all"
              >
                <MaterialIcons name="alternate-email" size={20} color="#bfc9c4" />
                <Text className="text-on-surface-variant font-medium text-base">Sign up with email</Text>
              </Pressable>
            </View>

            {/* Footer Links */}
            <View className="mt-8 items-center gap-6">
              <View className="w-full flex-row items-center justify-center">
                <View className="absolute w-full h-[1px] bg-outline-variant opacity-30" />
                <Text className="px-4 bg-[#1f2422] text-on-surface-variant text-sm font-label">OR</Text>
              </View>

              <Pressable onPress={() => router.push('/email-signup')}>
                <Text className="text-secondary font-medium underline">
                  Continue as Guest
                </Text>
              </Pressable>
            </View>
          </BlurView>

          {/* Trust Indicator */}
          <View className="mt-8 flex-row items-center justify-center gap-2">
            <MaterialIcons name="lock" size={14} color="rgba(191, 201, 196, 0.6)" />
            <Text className="text-on-surface-variant/60 text-xs font-label">
              Your data is secure and will never be shared.
            </Text>
          </View>
        </Animated.View>

        {/* Bottom Design Elements */}
        <Animated.View entering={FadeIn.delay(600)} className="absolute bottom-12 left-0 right-0 flex-row justify-center gap-8">
          <View className="items-center">
            <Text className="text-secondary text-2xl font-bold font-headline">50K+</Text>
            <Text className="text-on-surface-variant text-[10px] uppercase tracking-tighter">Players</Text>
          </View>
          <View className="w-[1px] h-8 bg-outline-variant opacity-30" />
          <View className="items-center">
            <Text className="text-secondary text-2xl font-bold font-headline">12</Text>
            <Text className="text-on-surface-variant text-[10px] uppercase tracking-tighter">Regions</Text>
          </View>
          <View className="w-[1px] h-8 bg-outline-variant opacity-30" />
          <View className="items-center">
            <Text className="text-secondary text-2xl font-bold font-headline">2000+</Text>
            <Text className="text-on-surface-variant text-[10px] uppercase tracking-tighter">Questions</Text>
          </View>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
}
