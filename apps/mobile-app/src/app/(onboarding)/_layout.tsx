import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0f1412' } }}>
      <Stack.Screen name="pick-path" />
      <Stack.Screen name="profile-setup" />
      <Stack.Screen name="arena-rules" />
      <Stack.Screen name="notifications" />
    </Stack>
  );
}
