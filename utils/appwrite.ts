import { Client, Databases } from "react-native-appwrite";

if (!process.env.EXPO_PUBLIC_APPWRITE_APP_ID) {
  throw new Error("EXPO_PUBLIC_APPWRITE_APP_ID is not set");
}

const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_APP_ID,
  platform: "com.hardik05.pingme",
  db: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  col: {
    chatRooms: process.env.EXPO_PUBLIC_APPWRITE_CHATROOM_ID,
    messages: process.env.EXPO_PUBLIC_APPWRITE_MESSAGES_ID,
    // user: process.env.EXPO_PUBLIC_APPWRITE_USER_ID,
  },
};

const client = new Client()
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const db = new Databases(client);
export { appwriteConfig, client, db };
