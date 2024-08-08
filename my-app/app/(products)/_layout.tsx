import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="clothes" />
      <Tabs.Screen name="shoes" />
    </Tabs>
  );
}
