import React from 'react';
import { View, Text, Pressable, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import GlassPanel from '../../shared/components/GlassPanel';
import PrimaryButton from '../../shared/components/PrimaryButton';
import TrustBadge from '../../shared/components/TrustBadge';
import AuthInput from '../../features/auth/presentation/components/AuthInput';

export default function ForgotPasswordScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Top App Bar */}
        <Animated.View entering={FadeInDown.delay(100)} className="flex-row items-center justify-between px-6 py-4">
          <Pressable onPress={() => router.back()} className="w-12 h-12 items-center justify-center rounded-full bg-surface-container-high/50 active:bg-surface-container-highest">
            <MaterialIcons name="arrow-back" size={24} color="#59de9b" />
          </Pressable>
          <Text className="font-headline text-lg font-bold text-secondary">Daily Naija Trivia</Text>
          <View className="w-10" />
        </Animated.View>

        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
          {/* Radial Glows */}
          <View className="absolute top-0 right-[-10%] w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <View className="absolute bottom-0 left-[-10%] w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

          <View className="px-6 z-10 flex-1 justify-center">
            <Animated.View entering={FadeInUp.delay(300)} className="w-full max-w-md self-center">
              <GlassPanel accentGlow="primary" intensity={20}>
                <View className="items-center relative z-10">
                  {/* Icon */}
                  <View className="w-20 h-20 rounded-full bg-secondary-container/20 items-center justify-center mb-6 border border-secondary/30">
                    <MaterialIcons name="lock-open" size={36} color="#e9c349" />
                  </View>

                  {/* Heading */}
                  <Text className="font-headline text-3xl font-bold mb-3 text-on-surface text-center">
                    Reset Your Key
                  </Text>
                  <Text className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed text-center px-4">
                    Enter the email address linked to your archive. We will send you a reset link to reclaim your throne.
                  </Text>

                  {/* Email Input */}
                  <View className="w-full mb-4">
                    <AuthInput 
                      label="Email Address" 
                      icon="mail" 
                      placeholder="Email Address" 
                      keyboardType="email-address" 
                      autoCapitalize="none" 
                    />
                  </View>

                  {/* Submit Button */}
                  <PrimaryButton title="Send Reset Link" />

                  {/* Back to Login */}
                  <Pressable onPress={() => router.push('/(auth)/email-login')} className="mt-8">
                    <Text className="text-primary font-medium text-sm">
                      Remember your password? Back to Login
                    </Text>
                  </Pressable>
                </View>
              </GlassPanel>
            </Animated.View>

            {/* Trust Badge */}
            <Animated.View entering={FadeInDown.delay(500)} className="mt-8 items-center">
              <TrustBadge text="Secure Password Recovery" icon="lock" iconColor="#bfc9c4" />
            </Animated.View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
