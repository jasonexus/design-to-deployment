import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{headerShown: false, headerTransparent: true}} />
    <Stack.Screen name="about" options={{headerShown: true, headerTransparent: true, headerTitle: 'About', headerTintColor: 'white'}} />
  </Stack>;
}
