import Tests from "@/components/screens/tests/Tests";
import type {Metadata} from "next";
export const metadata: Metadata = {
  title: "Tests | Intellecta",
  description: "Application for learning",
};
export default function TestsPage() {
  return <Tests />;
}
