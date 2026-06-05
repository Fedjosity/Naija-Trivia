import React from 'react';
import { Text, Pressable, PressableProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SocialLoginButtonProps extends PressableProps {
  provider: 'apple' | 'google' | 'email';
}

export default function SocialLoginButton({ provider, ...props }: SocialLoginButtonProps) {
  if (provider === 'apple') {
    return (
      <Pressable 
        className="w-full flex-row items-center justify-center gap-3 bg-white py-4 px-6 rounded-xl shadow-sm active:scale-95 transition-all"
        {...props}
      >
        <MaterialIcons name="apple" size={24} color="black" />
        <Text className="text-black font-semibold text-lg">Sign in with Apple</Text>
      </Pressable>
    );
  }

  if (provider === 'google') {
    return (
      <Pressable 
        className="w-full flex-row items-center justify-center gap-3 bg-transparent border border-secondary/50 py-4 px-6 rounded-xl active:scale-95 transition-all"
        {...props}
      >
        <Text className="text-on-surface font-semibold text-lg">Sign in with Google</Text>
      </Pressable>
    );
  }

  return (
    <Pressable 
      className="w-full flex-row items-center justify-center gap-3 bg-surface-container-high py-4 px-6 rounded-xl active:scale-95 transition-all"
      {...props}
    >
      <MaterialIcons name="alternate-email" size={20} color="#bfc9c4" />
      <Text className="text-on-surface-variant font-medium text-base">Sign up with email</Text>
    </Pressable>
  );
}
