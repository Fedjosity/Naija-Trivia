import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0f1412' } }}>
      <Stack.Screen name="join-elite" />
      <Stack.Screen name="email-login" />
      <Stack.Screen name="email-signup" />
      <Stack.Screen name="forgot-password" />
      <Stack.Screen name="verify-otp" />
    </Stack>
  );
}
