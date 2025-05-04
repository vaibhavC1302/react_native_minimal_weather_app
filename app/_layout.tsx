import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{

    headerStyle: {
      backgroundColor: '#75b4e3'
    },
    headerTitleAlign: 'center'
  }}>

    <Stack.Screen name="index" options={{ title: "Weather App" }} />
    <Stack.Screen name="WeatherInfoPage" options={{ title: "Current Weather" }} />

  </Stack>;
}
