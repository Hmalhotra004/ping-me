import { tokenCache } from "@/utils/cache";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  if (!key) {
    throw new Error("Missing Key");
  }

  return (
    <ClerkProvider
      publishableKey={key}
      tokenCache={tokenCache}
      // __experimental_passkeys={passkeys}
    >
      <ClerkLoaded>
        <ThemeProvider value={DarkTheme}>
          <StatusBar
            barStyle={"light-content"}
            backgroundColor={"black"}
          />
          <Slot />
        </ThemeProvider>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
