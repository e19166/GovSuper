import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Welcome' }} />
      <Stack.Screen name="screens/LoginScreen" options={{ title: 'Login' }} />
      <Stack.Screen name="screens/HomeScreen" options={{ title: 'Home' }} />
      <Stack.Screen name="screens/MiniAppScreen" options={{ title: 'Mini App' }} />
    </Stack>
  );
}
