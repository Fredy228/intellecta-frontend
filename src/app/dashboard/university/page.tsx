import { Profile } from "@/components/screens/profile/Profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Intellecta",
};

export default function UniversityProfilePage() {
  return <Profile type={"university"} />;
}
