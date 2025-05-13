import { Text } from "@/components/Text";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const ChatPage = () => {
  const { chat: chatId } = useLocalSearchParams();
  return (
    <View>
      <Text>{chatId}</Text>
    </View>
  );
};

export default ChatPage;

const styles = StyleSheet.create({});
