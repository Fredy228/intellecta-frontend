import Auth from "@/components/screens/auth/Auth";
import { RestorePass } from "@/components/screens/auth/forgot-pass/RestorePass";

type Props = {
  params: { key: string };
};

export default function RestorePassPage({ params }: Props) {
  return (
    <Auth>
      <RestorePass params={params} />
    </Auth>
  );
}
