import AuthForm from "@/components/screens/auth/form/AuthForm";
import dynamic from "next/dynamic";

const Auth = dynamic(() => import("@/components/screens/auth/Auth"), {
  ssr: false,
});

export default function SingUpPage() {
  return (
    <Auth>
      <AuthForm isRegister={true} />
    </Auth>
  );
}
