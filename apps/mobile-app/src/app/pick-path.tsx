import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';

type Category = {
  id: string;
  label: string;
  title: string;
  image: any;
  span: number;
};

const CATEGORIES: Category[] = [
  { id: 'nollywood', label: 'Entertainment', title: 'Nollywood', image: require('../assets/images/categories/path-nollywood.jpg'), span: 2 },
  { id: 'history', label: 'Legacy', title: 'History', image: require('../assets/images/categories/path-history.jpg'), span: 2 },
  { id: 'music', label: 'Rhythm', title: 'Music', image: require('../assets/images/categories/path-music.jpg'), span: 1 },
  { id: 'cuisine', label: 'Flavors', title: 'Cuisine', image: require('../assets/images/categories/path-cuisine.jpg'), span: 1 },
  { id: 'innovation', label: 'Modernity', title: 'Innovation', image: require('../assets/images/categories/path-innovation.jpg'), span: 2 },
];

export default function PickPathScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>(['nollywood']);

  const toggleCategory = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-surface relative">
      {/* Visual Accents */}
      <View className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-primary/10 blur-[120px] rounded-full" />
      <View className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-secondary/10 blur-[100px] rounded-full" />

      <ScrollView contentContainerStyle={{ padding: 24, paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
        {/* Top App Bar Mockup */}
        <Animated.View entering={FadeInDown.delay(100)} className="flex-row items-center justify-between mb-8">
          <View className="flex-row items-center gap-4">
            <Pressable onPress={() => router.back()} className="w-12 h-12 items-center justify-center rounded-full bg-surface-container-high active:bg-surface-container-highest">
              <MaterialIcons name="arrow-back" size={24} color="#dfe4e0" />
            </Pressable>
            <Text className="font-headline text-xl font-bold text-on-surface">Daily Naija Trivia</Text>
          </View>
          <Text className="font-label text-sm text-on-surface-variant">Step 2 of 3</Text>
        </Animated.View>

        {/* Progress Bar Section */}
        <Animated.View entering={FadeInDown.delay(200)} className="w-full h-1.5 bg-surface-container-highest rounded-full mb-12 overflow-hidden">
          <View className="h-full bg-secondary w-2/3 rounded-full shadow-lg shadow-secondary/50" />
        </Animated.View>

        {/* Hero Content */}
        <Animated.View entering={FadeInDown.delay(300)} className="mb-10">
          <Text className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface mb-4 leading-tight">
            Choose Your <Text className="text-secondary">Legacy</Text>
          </Text>
          <Text className="font-body text-lg text-on-surface-variant max-w-2xl">
            The Royal Digital Archive is vast. Select the realms where your knowledge reigns supreme. Pick at least two categories to begin your ascent.
          </Text>
        </Animated.View>

        {/* Bento Grid */}
        <Animated.View entering={FadeInDown.delay(400)} className="flex-row flex-wrap gap-4 mb-10">
          {CATEGORIES.map((cat, index) => {
            const isSelected = selected.includes(cat.id);
            // Rough sizing for bento: span 2 = full width on mobile, span 1 = half width
            const widthClass = cat.span === 2 ? 'w-full' : 'w-[47%]';
            const heightClass = cat.span === 2 ? 'h-64' : 'h-56';

            return (
              <Pressable
                key={cat.id}
                onPress={() => toggleCategory(cat.id)}
                className={`${widthClass} ${heightClass} relative overflow-hidden rounded-2xl bg-surface-container-low border ${isSelected ? 'border-secondary' : 'border-outline-variant/20'}`}
              >
                <ImageBackground
                  source={cat.image}
                  className={`absolute inset-0 w-full h-full opacity-60 ${!isSelected && 'grayscale'}`}
                />
                <View className="absolute inset-0 bg-surface-container-lowest/40" />
                
                <View className="absolute bottom-0 left-0 p-6 w-full">
                  <View className="flex-row items-center justify-between">
                    <View>
                      <Text className="font-label text-xs uppercase tracking-widest text-secondary mb-2">{cat.label}</Text>
                      <Text className="font-headline text-2xl font-bold text-on-surface">{cat.title}</Text>
                    </View>
                    <View className={`w-10 h-10 rounded-full border items-center justify-center ${isSelected ? 'bg-secondary border-secondary' : 'border-outline-variant'}`}>
                      <MaterialIcons name={isSelected ? "check" : "add"} size={24} color={isSelected ? "#3c2f00" : "rgba(223, 228, 224, 0.4)"} />
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          })}
        </Animated.View>

        {/* Footer Actions */}
        <Animated.View entering={FadeIn.delay(600)} className="pt-8 border-t border-outline-variant/20 flex-col gap-6">
          <View className="flex-row items-center gap-4">
            <View className="flex-row -space-x-3">
              <Image source={require('../assets/images/avatars/avatar-1.jpg')} className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high" />
              <Image source={require('../assets/images/avatars/avatar-2.jpg')} className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high" />
              <Image source={require('../assets/images/avatars/avatar-3.jpg')} className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high" />
            </View>
            <Text className="font-label text-sm text-on-surface-variant">
              Join 2.4k others in Nollywood today
            </Text>
          </View>

          <Pressable className="w-full py-5 rounded-xl bg-primary flex-row items-center justify-center gap-3 active:scale-95 transition-transform shadow-lg shadow-primary/30">
            <Text className="font-headline font-bold text-on-primary-fixed-variant text-lg">
              Continue Journey
            </Text>
            <MaterialIcons name="chevron-right" size={24} color="#005232" />
          </Pressable>
        </Animated.View>
      </ScrollView>
    </SafeAreaView>
  );
}
