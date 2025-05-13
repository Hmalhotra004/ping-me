import { colors } from "@/utils/colors";
import { Lock } from "phosphor-react-native";
import React from "react";
import { View } from "react-native";
import { Text } from "./Text";

interface ItemTitleProps {
  title: string;
  isPrivate: boolean;
}

const ItemTitle = ({ isPrivate, title }: ItemTitleProps) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
      <Text style={{ fontSize: 17 }}>{title}</Text>
      {isPrivate && (
        <Lock
          size={20}
          color={colors.Gray}
          weight="fill"
        />
      )}
    </View>
  );
};

export default ItemTitle;
