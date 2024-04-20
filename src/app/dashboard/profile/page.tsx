import type { Metadata } from "next";
import ProfileUser from "@/components/screens/profile/ProfileUser";

export const metadata: Metadata = {
  title: "Profile | Intellecta",
};

export default function ProfilePage() {
  return <ProfileUser />;
}
