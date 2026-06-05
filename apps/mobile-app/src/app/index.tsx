import React from 'react';
import { View, Text, Pressable, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import { cssInterop } from 'nativewind';

cssInterop(BlurView, { className: 'style' });

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface relative overflow-hidden">
      {/* Top App Bar */}
      <View className="flex-row items-center justify-between px-6 py-4 z-20">
        <Pressable className="w-12 h-12 items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors">
          <MaterialIcons name="menu" size={24} color="#59de9b" />
        </Pressable>
        <Text className="font-headline font-bold text-lg tracking-tight text-on-surface">
          Naija Trivia
        </Text>
        <Pressable className="w-12 h-12 items-center justify-center rounded-full bg-surface-container-low">
          <MaterialIcons name="account-circle" size={24} color="#bfc9c4" />
        </Pressable>
      </View>

      <Animated.View entering={FadeIn.duration(1000)} className="flex-1 items-center justify-center px-8 pb-12 z-10">
        {/* Hero Image */}
        <View className="w-full max-w-sm aspect-[4/5] rounded-t-[10rem] rounded-b-xl overflow-hidden mb-12 shadow-2xl">
          <ImageBackground
            source={require('../assets/images/hero/welcome-hero.jpg')}
            className="w-full h-full"
          >
            {/* Gradients */}
            <View className="absolute inset-0 bg-surface/40" />
          </ImageBackground>
        </View>

        {/* Content */}
        <Animated.View entering={FadeInDown.delay(300).duration(800)} className="items-center max-w-xl">
          <Text className="font-label font-semibold text-primary uppercase tracking-[0.2em] mb-4 text-xs">
            The Journey Begins
          </Text>
          <Text className="font-headline text-5xl font-extrabold mb-6 leading-tight text-center text-secondary-fixed">
            Welcome to the Culture
          </Text>
          <Text className="text-on-surface-variant text-lg leading-relaxed mb-12 text-center max-w-sm">
            Dive into the heart of Africa's giant. Experience history, art, and wisdom through the lens of Nigeria's most elite trivia collection.
          </Text>

          {/* CTA Button */}
          <Pressable
            onPress={() => router.push('/(auth)/join-elite')}
            className="group flex-row items-center justify-between pl-8 pr-2 py-2 rounded-full border border-outline-variant/20 bg-[#353a38]/40"
          >
            <Text className="text-secondary-fixed-dim font-semibold tracking-wide uppercase text-sm mr-8">
              Continue to Arena
            </Text>
            <View className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
              <MaterialIcons name="arrow-forward" size={24} color="#003921" />
            </View>
          </Pressable>
        </Animated.View>
      </Animated.View>

      {/* Decorative blurs */}
      <View className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <View className="absolute top-1/2 -right-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      {/* Progress Indicator */}
      <View className="absolute bottom-8 left-0 right-0 flex-row justify-center gap-2">
        <View className="w-12 h-1 rounded-full bg-primary" />
        <View className="w-2 h-1 rounded-full bg-surface-container-highest" />
        <View className="w-2 h-1 rounded-full bg-surface-container-highest" />
      </View>
    </SafeAreaView>
  );
}
