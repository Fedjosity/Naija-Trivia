import React from 'react';
import { Pressable, Text, PressableProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface PrimaryButtonProps extends PressableProps {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function PrimaryButton({ 
  title, 
  icon, 
  variant = 'primary',
  className = '',
  ...props 
}: PrimaryButtonProps) {
  
  const bgClass = variant === 'primary' 
    ? 'bg-primary shadow-primary/30' 
    : 'bg-secondary shadow-secondary/30';
    
  const textClass = variant === 'primary'
    ? 'text-on-primary-fixed-variant'
    : 'text-on-secondary';

  const iconColor = variant === 'primary' ? '#005232' : '#3c2f00';

  return (
    <Pressable 
      className={`w-full rounded-xl py-5 flex-row items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg ${bgClass} ${className}`}
      {...props}
    >
      <Text className={`font-headline font-bold text-lg ${textClass}`}>
        {title}
      </Text>
      {icon && <MaterialIcons name={icon as any} size={20} color={iconColor} />}
    </Pressable>
  );
}
