import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import RuleCard from '../../features/onboarding/presentation/components/RuleCard';
import PrimaryButton from '../../shared/components/PrimaryButton';

type RuleCard = {
  icon: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  title: string;
  description: string;
};

const RULES: RuleCard[] = [
  {
    icon: 'timer',
    iconColor: '#59de9b',
    title: 'Lightning Rounds',
    description: '10 seconds per question. Speed is your weapon. Think fast, answer faster.',
  },
  {
    icon: 'local-fire-department',
    iconColor: '#e9c349',
    title: 'Streak Multiplier',
    description: 'Chain correct answers to multiply your points. Break the chain, reset the multiplier.',
  },
  {
    icon: 'emoji-events',
    iconColor: '#e9c349',
    title: 'Earn Gold & Glory',
    description: 'Climb the leaderboard, unlock achievements, and prove you are the ultimate Naija trivia champion.',
  },
];

export default function ArenaRulesScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      {/* Background Glows */}
      <View className="absolute inset-0">
        <View className="absolute top-[20%] left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/8 rounded-full blur-3xl" />
      </View>

      {/* Top Nav */}
      <Animated.View entering={FadeInDown.delay(100)} className="flex-row items-center justify-between px-6 py-4 z-10">
        <Pressable onPress={() => router.back()} className="active:scale-95">
          <MaterialIcons name="arrow-back" size={24} color="#59de9b" />
        </Pressable>
        <Text className="font-headline text-xl font-black text-secondary tracking-tight">Daily Naija Trivia</Text>
        <Text className="font-label text-sm text-on-surface-variant font-medium">Step 4 of 4</Text>
      </Animated.View>

      {/* Progress Bar - Full */}
      <View className="w-full h-1 bg-surface-container-highest z-10">
        <View className="h-full bg-secondary w-full shadow-lg shadow-secondary/40" />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 160 }} showsVerticalScrollIndicator={false} className="z-10">
        {/* Header */}
        <Animated.View entering={FadeInDown.delay(200)} className="items-center px-6 pt-10 pb-8">
          <Text className="font-headline text-3xl font-bold text-on-surface mb-3 tracking-tight text-center">
            The Arena Awaits
          </Text>
          <Text className="font-body text-on-surface-variant text-center max-w-[280px]">
            Master these rules to dominate the leaderboard.
          </Text>
        </Animated.View>

        {/* Rule Cards */}
        <View className="px-6 gap-4 mb-12">
          {RULES.map((rule, index) => (
            <Animated.View key={index} entering={FadeInDown.delay(300 + index * 100)}>
              <RuleCard 
                icon={rule.icon} 
                iconColor={rule.iconColor} 
                title={rule.title} 
                description={rule.description} 
              />
            </Animated.View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Actions */}
      <View className="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-4 items-center z-20 bg-surface/80">
        <PrimaryButton 
          title="Enter the Arena" 
          icon="chevron-right" 
          className="mb-4" 
          onPress={() => router.push('/(onboarding)/notifications')} 
        />
        <Pressable>
          <Text className="font-label text-sm text-on-surface-variant underline">Skip Tutorial</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
