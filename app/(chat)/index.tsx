import ItemTitleAndDescription from "@/components/ItemTitleAndDescription";
import { colors } from "@/utils/colors";
import { chatRooms } from "@/utils/test-data";
import { useRouter } from "expo-router";
import { CaretRight } from "phosphor-react-native";
import { useState } from "react";
import { FlatList, Pressable, RefreshControl, StyleSheet } from "react-native";

export default function Index() {
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();

  async function handleRefresh() {}

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
