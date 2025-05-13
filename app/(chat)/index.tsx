import ItemTitleAndDescription from "@/components/ItemTitleAndDescription";
import { appwriteConfig, db } from "@/utils/appwrite";
import { colors } from "@/utils/colors";
import { chatRooms } from "@/utils/test-data";
import { ChatRoom } from "@/utils/types";
import { useRouter } from "expo-router";
import { CaretRight } from "phosphor-react-native";
import { useEffect, useState } from "react";
import { FlatList, Pressable, RefreshControl, StyleSheet } from "react-native";
import { Query } from "react-native-appwrite";

export default function Index() {
  const [charRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();

  async function fetchChatRooms() {
    try {
      const { documents, total } = await db.listDocuments(
        appwriteConfig.db,
        appwriteConfig.col.chatRooms,
        [Query.limit(100)]
      );
      console.log(documents);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleRefresh() {}

  useEffect(() => {
    fetchChatRooms();
  }, []);

  return (
    <FlatList
      data={chatRooms}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={handleRefresh}
        />
      }
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ padding: 16, gap: 16 }}
      renderItem={({ item }) => (
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/(chat)/[chat]",
              params: { chat: item.id },
            })
          }
          style={styles.container}
        >
          <ItemTitleAndDescription
            title={item.title}
            description={item.description}
          />
          <CaretRight color={colors.Primary} />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
    padding: 16,
    width: "100%",
    borderRadius: 16,
    backgroundColor: colors.Secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
