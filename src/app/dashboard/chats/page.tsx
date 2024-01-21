import Chats from "@/components/screens/chats/Chats";
import type {Metadata} from "next";
export const metadata: Metadata = {
  title: "Chats | Intellecta",
  description: "Application for learning",
};
export default function ChatsPage() {
  return <Chats />;
}
