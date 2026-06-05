import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import PrimaryButton from '../../shared/components/PrimaryButton';

const PRESET_ICONS: { name: keyof typeof MaterialIcons.glyphMap; label: string }[] = [
  { name: 'sports-martial-arts', label: 'Warrior' },
  { name: 'pets', label: 'Spirit' },
  { name: 'local-florist', label: 'Nature' },
  { name: 'diamond', label: 'Diamond' },
];

export default function ProfileSetupScreen() {
  const router = useRouter();
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-surface">
      {/* Top App Bar */}
      <Animated.View entering={FadeInDown.delay(100)} className="flex-row items-center justify-between px-6 py-4 border-b border-outline-variant/10">
        <View className="flex-row items-center gap-4">
          <Pressable onPress={() => router.back()} className="w-12 h-12 items-center justify-center rounded-full bg-surface-container-high/50">
            <MaterialIcons name="arrow-back" size={24} color="#dfe4e0" />
          </Pressable>
          <Text className="font-headline font-bold text-on-surface text-lg">Daily Naija Trivia</Text>
        </View>
        <Text className="font-label text-sm text-secondary">Step 3 of 4</Text>
      </Animated.View>

      {/* Progress Bar */}
      <View className="w-full h-1 bg-surface-container-highest">
        <View className="h-full bg-secondary w-3/4 shadow-lg shadow-secondary/30" />
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Animated.View entering={FadeInDown.delay(200)} className="text-center px-6 pt-10 pb-6 items-center">
          <Text className="font-headline text-3xl font-bold text-on-surface tracking-tight mb-4">
            Forge Your Identity
          </Text>
          <Text className="font-body text-on-surface-variant text-center max-w-xs">
            Choose a legendary gamertag and avatar that will echo across the leaderboards.
          </Text>
        </Animated.View>

        {/* Avatar Selection Area */}
        <Animated.View entering={FadeInDown.delay(300)} className="mx-6 bg-surface-container-low rounded-xl p-8 mb-8 border border-outline-variant/10 shadow-2xl items-center">
          {/* Main Avatar Placeholder */}
          <Pressable className="mb-8">
            <View className="w-[120px] h-[120px] rounded-full border-2 border-dashed border-secondary bg-surface-container-high items-center justify-center">
              <MaterialIcons name="account-circle" size={48} color="#bfc9c4" />
              <View className="absolute inset-0 rounded-full bg-surface/50 items-center justify-center opacity-0">
                <MaterialIcons name="photo-camera" size={24} color="#dfe4e0" />
              </View>
            </View>
          </Pressable>

          {/* Quick Presets */}
          <Text className="font-label text-xs text-on-surface-variant uppercase tracking-widest mb-4">
            Quick Presets
          </Text>
          <View className="flex-row justify-center gap-4">
            {PRESET_ICONS.map((preset, index) => (
              <Pressable
                key={index}
                onPress={() => setSelectedPreset(index)}
                className={`w-12 h-12 rounded-full bg-surface-container-high items-center justify-center border ${selectedPreset === index ? 'border-secondary shadow-lg shadow-secondary/20' : 'border-outline-variant/20'}`}
              >
                <MaterialIcons
                  name={preset.name as any}
                  size={24}
                  color={selectedPreset === index ? '#e9c349' : '#bfc9c4'}
                />
              </Pressable>
            ))}
          </View>
        </Animated.View>

        {/* Input Fields */}
        <Animated.View entering={FadeInDown.delay(400)} className="px-6 gap-6">
          {/* Gamertag */}
          <View className="gap-2">
            <Text className="font-label text-xs text-on-surface-variant ml-1">Gamertag</Text>
            <View className="flex-row items-center bg-surface-variant/40 rounded-lg px-4 py-3 border border-outline/15">
              <MaterialIcons name="shield" size={24} color="#bfc9c4" />
              <TextInput
                className="flex-1 ml-3 text-on-surface font-body text-base"
                placeholder="Odogwu99"
                placeholderTextColor="rgba(191, 201, 196, 0.5)"
              />
            </View>
            <Text className="font-label text-xs text-on-surface-variant/70 ml-1">Must be unique.</Text>
          </View>

          {/* Display Name */}
          <View className="gap-2">
            <Text className="font-label text-xs text-on-surface-variant ml-1">Display Name</Text>
            <View className="flex-row items-center bg-surface-variant/40 rounded-lg px-4 py-3 border border-outline/15">
              <MaterialIcons name="person" size={24} color="#bfc9c4" />
              <TextInput
                className="flex-1 ml-3 text-on-surface font-body text-base"
                placeholder="Chidi The Great"
                placeholderTextColor="rgba(191, 201, 196, 0.5)"
              />
            </View>
            <Text className="font-label text-xs text-on-surface-variant/70 ml-1">How others see you in the arena.</Text>
          </View>
        </Animated.View>
      </ScrollView>

      {/* Fixed Bottom CTA */}
      <View className="absolute bottom-0 left-0 right-0 p-6 pb-10 bg-surface/90">
        <PrimaryButton 
          title="Continue Journey" 
          icon="arrow-forward" 
          onPress={() => router.push('/(onboarding)/arena-rules')} 
        />
      </View>
    </SafeAreaView>
  );
}
