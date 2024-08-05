import AuthForm from "@/components/screens/auth/form/AuthForm";
import dynamic from "next/dynamic";

const Auth = dynamic(() => import("@/components/screens/auth/Auth"), {
  ssr: false,
});

export default function SingInPage() {
  return (
    <Auth>
      <AuthForm isRegister={false} />
    </Auth>
  );
}
