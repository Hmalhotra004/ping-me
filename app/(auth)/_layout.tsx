import { useUser } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AUTHLayout() {
  const { isSignedIn } = useUser();

  if (isSignedIn) {
    return <Redirect href={"/(chat)"} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
