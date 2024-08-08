import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="clothes" options={{ title: "Clothes" }} />
      <Tabs.Screen name="shoes" options={{ title: "Shoes" }} />
    </Tabs>
  );
}
