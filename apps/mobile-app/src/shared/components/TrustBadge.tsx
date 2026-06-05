import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface TrustBadgeProps {
  text: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  iconColor?: string;
  className?: string;
}

export default function TrustBadge({ 
  text, 
  icon = 'enhanced-encryption',
  iconColor = '#59de9b',
  className = ''
}: TrustBadgeProps) {
  return (
    <View className={`flex-row items-center justify-center gap-2 bg-surface-container-low/50 px-4 py-2 rounded-full border border-outline-variant/15 backdrop-blur-sm ${className}`}>
      <MaterialIcons name={icon as any} size={14} color={iconColor} />
      <Text className="font-label text-xs text-on-surface-variant">
        {text}
      </Text>
    </View>
  );
}
