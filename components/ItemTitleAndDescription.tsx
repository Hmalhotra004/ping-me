import { colors } from "@/utils/colors";
import React from "react";
import { View } from "react-native";
import ItemTitle from "./ItemTitle";
import { Text } from "./Text";

interface ItemTitleAndDescriptionProps {
  title: string;
  description: string;
  isPrivate?: boolean;
}

const ItemTitleAndDescription = ({
  description,
  title,
  isPrivate,
}: ItemTitleAndDescriptionProps) => {
  return (
    <View style={{ gap: 4 }}>
      <ItemTitle
        title={title}
        isPrivate={isPrivate ? isPrivate : false}
      />
      <Text style={{ fontSize: 13, color: colors.Gray }}>{description}</Text>
    </View>
  );
};

export default ItemTitleAndDescription;
