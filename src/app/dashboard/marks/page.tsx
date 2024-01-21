import Marks from "@/components/screens/marks/Marks";
import type {Metadata} from "next";
export const metadata: Metadata = {
  title: "Marks | Intellecta",
  description: "Application for learning",
};
export default function MarksPage() {
  return <Marks />;
}
