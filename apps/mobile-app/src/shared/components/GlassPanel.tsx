import React, { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { BlurView } from 'expo-blur';

interface GlassPanelProps extends ViewProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  tint?: 'light' | 'dark' | 'default';
  accentGlow?: 'primary' | 'secondary' | 'none';
}

export default function GlassPanel({ 
  children, 
  className = '', 
  intensity = 25, 
  tint = 'dark',
  accentGlow = 'none',
  ...props 
}: GlassPanelProps) {
  return (
    <BlurView 
      intensity={intensity} 
      tint={tint} 
      className={`p-8 rounded-[2rem] bg-[#353a38]/10 border border-outline-variant/15 overflow-hidden shadow-2xl ${className}`}
      {...props}
    >
      {/* Optional Glow accents matching the design system */}
      {accentGlow === 'primary' && (
        <View className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 blur-xl rounded-full" />
      )}
      {accentGlow === 'secondary' && (
        <View className="absolute -top-6 -right-6 w-20 h-20 bg-secondary/15 blur-xl rounded-full" />
      )}
      
      <View className="relative z-10">
        {children}
      </View>
    </BlurView>
  );
}
