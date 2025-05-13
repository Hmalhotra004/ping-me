import { colors } from "@/utils/colors";
import { useUser } from "@clerk/clerk-expo";
import { Image } from "expo-image";
import { Link, Redirect, Stack } from "expo-router";
import { CaretLeft, Plus } from "phosphor-react-native";
import { Pressable } from "react-native";

export default function RootLayout() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return <Redirect href={"/(auth)"} />;
  }

  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerLargeTitle: true,
          headerTitle: "Chat Rooms",
          headerLeft: () => (
            <Link
              href="/(chat)/profile"
              asChild
            >
              <Pressable style={{ marginRight: 16 }}>
                <Image
                  source={{ uri: user.imageUrl }}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                  }}
                />
              </Pressable>
            </Link>
          ),
          headerRight: () => (
            <Link href={"/(chat)/newRoom"}>
              <Plus
                size={22}
                color="#007AFF"
              />
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          presentation: "modal",
          headerTitle: "Profile",
          headerLeft: () => (
            <Link
              dismissTo
              href={"/(chat)"}
              asChild
            >
              <Pressable style={{ marginRight: 10 }}>
                <CaretLeft
                  size={22}
                  color="#007AFF"
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="newRoom"
        options={{
          presentation: "modal",
          headerTitle: "New Chat Room",
          headerLeft: () => (
            <Link
              dismissTo
              href={"/(chat)"}
              asChild
            >
              <Pressable style={{ marginRight: 10 }}>
                <CaretLeft
                  size={22}
                  color={colors.Primary}
                />
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="[chat]"
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="settings/[chat]"
        options={{
          headerTitle: "Room Settings",
          presentation: "fullScreenModal",
        }}
      />
    </Stack>
  );
}
