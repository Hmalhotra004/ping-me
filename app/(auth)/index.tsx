import { Typo } from "@/components/Typo";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typo>Auth</Typo>
    </View>
  );
}
