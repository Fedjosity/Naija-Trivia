import React, { useState } from 'react';
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

export default function EmailLoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
          {/* Radial Glows */}
          <View className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
          <View className="absolute bottom-[-10%] right-[-10%] w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

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

          {/* Glass Panel */}
          <View className="px-6 pb-20 z-10 flex-1 justify-center">
            <Animated.View entering={FadeInUp.delay(300)} className="w-full max-w-md self-center">
              <GlassPanel accentGlow="primary" intensity={25}>
                <View className="mb-10 items-center">
                  <Text className="font-headline text-3xl font-bold mb-3 text-on-surface text-center">
                    Welcome Back, Champion
                  </Text>
                  <Text className="text-on-surface-variant font-body leading-relaxed text-center">
                    Your throne awaits. Log in to continue your legacy.
                  </Text>
                </View>

                {/* Form */}
                <View className="gap-4">
                  {/* Email */}
                  <AuthInput 
                    label="Email Address" 
                    icon="mail" 
                    placeholder="Email Address" 
                    keyboardType="email-address" 
                    autoCapitalize="none" 
                  />

                  {/* Password */}
                  <AuthInput 
                    label="Password" 
                    icon="lock" 
                    placeholder="Password" 
                    isPassword={true} 
                  />

                  {/* Forgot Password Link */}
                  <Pressable onPress={() => router.push('/(auth)/forgot-password')} className="self-end">
                    <Text className="text-secondary font-label text-sm">Forgot Password?</Text>
                  </Pressable>

                  {/* Login Button */}
                  <PrimaryButton 
                    title="Log In" 
                    onPress={() => router.push('/(onboarding)/pick-path')} 
                    variant="secondary" 
                    className="mt-2" 
                  />
                </View>

                {/* Sign Up Link */}
                <View className="mt-8 items-center">
                  <View className="flex-row items-center gap-1">
                    <Text className="text-on-surface-variant text-base">Don't have an account?</Text>
                    <Pressable onPress={() => router.push('/(auth)/email-signup')}>
                      <Text className="text-primary font-semibold text-base ml-1">Sign Up</Text>
                    </Pressable>
                  </View>
                </View>
              </GlassPanel>
            </Animated.View>
          </View>

          {/* Footer Trust Badge */}
          <Animated.View entering={FadeInDown.delay(500)} className="absolute bottom-8 left-0 right-0 items-center z-10">
            <TrustBadge text="Secure Encrypted Authentication" />
          </Animated.View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
