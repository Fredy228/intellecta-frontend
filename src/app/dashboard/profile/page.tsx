import { Profile } from "@/components/screens/profile/Profile";
import type { Metadata } from "next";
import { TStudentProfile } from "@/types/profile";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/user/selectors";
import { Achieve } from "@/components/ui/profile/bars/skills/achievements/achieveList";

export const metadata: Metadata = {
  title: "Profile | Intellecta",
};

export default function ProfilePage() {
  const user = useSelector(selectUser);

  let profile: TStudentProfile = {
    type: "student",
    subtitle: "User at Intellecta",
    role: "користувач",
    achievements: Achieve,
    firstName: user.firstName,
    lastName: user.lastName,
    friends: 525,
    id: 1,
    info: {
      mail: user.email,
      tel: "+38 (099) 999 9999",
      link: "intellecta.com.ua",
      location: "Одеса, Україна",
      birthday: "13 вер, 2000",
    },
    rating: 7.5,
    skills: [
      "python",
      "c#",
      "golang",
      "coding",
      "back-end",
      "full-stack",
      "ментор",
      "верстка",
    ],
    avatar: user.image,
  };

  return <Profile profile={profile} />;
}
