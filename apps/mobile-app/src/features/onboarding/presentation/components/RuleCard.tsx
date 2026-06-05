import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

interface RuleCardProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  title: string;
  description: string;
}

export default function RuleCard({ icon, iconColor, title, description }: RuleCardProps) {
  return (
    <BlurView 
      intensity={10} 
      tint="dark" 
      className="rounded-xl p-5 flex-row items-start gap-4 bg-[#353a38]/10 border border-outline-variant/15 overflow-hidden"
    >
      <View className="w-10 h-10 rounded-full bg-surface-container-high items-center justify-center">
        <MaterialIcons name={icon as any} size={20} color={iconColor} />
      </View>
      <View className="flex-1">
        <Text className="font-headline font-bold text-on-surface mb-1">{title}</Text>
        <Text className="font-body text-xs text-on-surface-variant leading-relaxed">{description}</Text>
      </View>
    </BlurView>
  );
}
