import React, { useRef, useState } from 'react';
import { View, Text, Pressable, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import { BlurView } from 'expo-blur';
import GlassPanel from '../../shared/components/GlassPanel';
import PrimaryButton from '../../shared/components/PrimaryButton';
import TrustBadge from '../../shared/components/TrustBadge';

export default function VerifyOTPScreen() {
  const router = useRouter();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-surface">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        {/* Top Bar */}
        <Animated.View entering={FadeInDown.delay(100)} className="flex-row items-center justify-between px-6 py-4">
          <Pressable onPress={() => router.back()} className="w-12 h-12 items-center justify-center rounded-full active:bg-surface-container-highest">
            <MaterialIcons name="arrow-back" size={24} color="#59de9b" />
          </Pressable>
          <View className="flex-row items-center gap-2">
            <MaterialIcons name="eco" size={20} color="#e9c349" />
            <Text className="font-headline text-xl font-black text-secondary tracking-tight">Daily Naija Trivia</Text>
          </View>
          <View className="w-10" />
        </Animated.View>

        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} showsVerticalScrollIndicator={false}>
          {/* Ambient Glow */}
          <View className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

          <View className="px-6 z-10 flex-1 justify-center">
            <Animated.View entering={FadeInUp.delay(300)} className="w-full max-w-md self-center">
              <GlassPanel intensity={25}>
                {/* Icon */}
                <View className="w-16 h-16 rounded-full bg-secondary-container/20 items-center justify-center mb-6 border border-secondary/20 shadow-lg shadow-secondary/15 self-center">
                  <MaterialIcons name="mark-email-read" size={36} color="#e9c349" />
                </View>

                {/* Typography */}
                <Text className="font-headline text-2xl font-bold text-secondary mb-3 text-center">
                  Verify Your Identity
                </Text>
                <Text className="font-body text-on-surface-variant mb-8 text-center px-4">
                  We sent a 6-digit code to your email. Enter it below to unlock your archive.
                </Text>

                {/* OTP Inputs */}
                <View className="flex-row justify-center gap-2 mb-8 w-full">
                  {Array(6).fill(0).map((_, index) => (
                    <TextInput
                      key={index}
                      ref={(ref) => { inputRefs.current[index] = ref; }}
                      className="w-12 h-14 bg-surface-container-highest rounded-lg text-center font-headline text-xl text-on-surface"
                      maxLength={1}
                      keyboardType="number-pad"
                      value={otp[index]}
                      onChangeText={(text) => handleOtpChange(text, index)}
                      onKeyPress={({ nativeEvent }) => handleKeyPress(nativeEvent.key, index)}
                      placeholder="-"
                      placeholderTextColor="rgba(191, 201, 196, 0.3)"
                    />
                  ))}
                </View>

                {/* Verify Button */}
                <PrimaryButton 
                  title="Verify Code" 
                  variant="secondary" 
                  onPress={() => router.push('/(onboarding)/pick-path')} 
                />

                {/* Footer Links */}
                <View className="mt-8 items-center gap-3">
                  <Pressable>
                    <Text className="text-on-surface-variant text-sm">
                      Didn't receive a code? <Text className="text-secondary font-semibold">Resend (59s)</Text>
                    </Text>
                  </Pressable>
                  <Pressable className="flex-row items-center gap-1">
                    <MaterialIcons name="edit" size={14} color="#89938f" />
                    <Text className="text-outline text-sm">Change email address</Text>
                  </Pressable>
                </View>
              </GlassPanel>
            </Animated.View>

            {/* Trust Badge */}
            <Animated.View entering={FadeInDown.delay(500)} className="mt-8 items-center">
              <TrustBadge text="Verification Protected" icon="shield" iconColor="rgba(191, 201, 196, 0.6)" />
            </Animated.View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
