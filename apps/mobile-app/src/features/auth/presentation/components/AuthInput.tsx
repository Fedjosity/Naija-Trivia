import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface AuthInputProps extends TextInputProps {
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  isPassword?: boolean;
}

export default function AuthInput({ 
  label, 
  icon, 
  isPassword = false, 
  ...props 
}: AuthInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <View className="gap-2">
      <Text className="text-xs font-semibold uppercase tracking-widest text-secondary/80 ml-1">
        {label}
      </Text>
      <View className="relative justify-center">
        <MaterialIcons 
          name={icon as any} 
          size={24} 
          color="#bfc9c4" 
          style={{ position: 'absolute', left: 16, zIndex: 10 }} 
        />
        <TextInput 
          className="w-full bg-surface-container-highest rounded-xl py-4 pl-12 pr-12 text-on-surface font-body text-base border border-transparent focus:border-secondary/50"
          placeholderTextColor="rgba(191, 201, 196, 0.4)"
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && (
          <Pressable 
            className="absolute right-4 z-10 p-2"
            onPress={() => setShowPassword(!showPassword)}
          >
            <MaterialIcons 
              name={showPassword ? "visibility" : "visibility-off"} 
              size={20} 
              color="#bfc9c4" 
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}
