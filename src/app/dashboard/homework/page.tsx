import Homework from "@/components/screens/homework/Homework";
import type {Metadata} from "next";
export const metadata: Metadata = {
  title: "Home Work | Intellecta",
  description: "Application for learning",
};
export default function HomeworkPage() {
  return <Homework />;
}
