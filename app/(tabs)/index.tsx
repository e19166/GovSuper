// app/(tabs)/index.tsx
import { Stack } from "expo-router";
import React from "react";

export default function Root() {
  return (
    <Stack>
      <Stack.Screen name="LoginScreen"/>
      <Stack.Screen name="HomeScreen"/>
      <Stack.Screen name="MiniAppScreen"/>
    </Stack>
  );
}
