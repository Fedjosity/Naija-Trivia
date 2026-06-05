import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import PrimaryButton from '../../shared/components/PrimaryButton';

type FeatureItem = {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  subtitle: string;
};

const FEATURES: FeatureItem[] = [
  {
    icon: 'alarm',
    title: 'Daily Challenge Alerts',
    subtitle: 'Get notified at your preferred time every day.',
  },
  {
    icon: 'trending-up',
    title: 'Streak Protection',
    subtitle: 'We will warn you before your winning streak expires.',
  },
];

export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      {/* Ambient background glow */}
      <View className="absolute inset-0 items-center justify-center">
        <View className="w-96 h-96 bg-primary rounded-full blur-3xl opacity-10" />
      </View>

      <View className="flex-1 items-center justify-center p-6 z-10">
        {/* Hero Illustration */}
        <Animated.View entering={FadeInDown.delay(200)} className="mb-4">
          <BlurView intensity={20} tint="dark" className="w-40 h-40 rounded-full items-center justify-center bg-[#353a38]/10 border-t border-surface-bright/30 overflow-hidden">
            {/* Glow Rings */}
            <View className="absolute inset-0 rounded-full border border-primary/20" />
            <View className="absolute inset-2 rounded-full border border-secondary/10" />
            <MaterialIcons name="notifications-active" size={64} color="#e9c349" />
          </BlurView>
        </Animated.View>

        {/* Typography */}
        <Animated.View entering={FadeInDown.delay(300)} className="items-center mb-10">
          <Text className="font-headline text-3xl font-bold text-secondary tracking-tight mb-4 text-center">
            The Town Crier Awaits
          </Text>
          <Text className="font-body text-base text-on-surface-variant leading-relaxed text-center px-2">
            Never miss a Daily Trivia challenge. Get notified when new questions drop and when your streak is about to expire.
          </Text>
        </Animated.View>

        {/* Feature Highlights */}
        <Animated.View entering={FadeInDown.delay(400)} className="w-full gap-6 px-4 mb-10">
          {FEATURES.map((feature, index) => (
            <View key={index} className="flex-row items-start gap-4">
              <View className="w-12 h-12 rounded-xl bg-surface-container-low items-center justify-center shadow-lg">
                <MaterialIcons name={feature.icon as any} size={24} color="#e9c349" />
              </View>
              <View className="flex-1">
                <Text className="font-headline font-semibold text-on-surface text-lg">{feature.title}</Text>
                <Text className="font-body text-sm text-on-surface-variant mt-1">{feature.subtitle}</Text>
              </View>
            </View>
          ))}
        </Animated.View>

        {/* Actions */}
        <Animated.View entering={FadeIn.delay(600)} className="w-full gap-6 pt-8">
          <PrimaryButton title="Enable Notifications" variant="secondary" />
          <Pressable className="items-center">
            <Text className="font-body text-sm text-on-surface-variant underline">Maybe Later</Text>
          </Pressable>
        </Animated.View>

        {/* Progress Dots */}
        <Animated.View entering={FadeIn.delay(700)} className="flex-row items-center justify-center gap-2 pt-6">
          <View className="w-2 h-2 rounded-full bg-surface-container-highest" />
          <View className="w-2 h-2 rounded-full bg-surface-container-highest" />
          <View className="w-8 h-2 rounded-full bg-primary shadow-lg shadow-primary/40" />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
