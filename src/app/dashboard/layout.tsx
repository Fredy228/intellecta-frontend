import React from "react";
import Layout from "@/components/layout/Layout";
import { ProtectWrapper } from "@/components/providers/protect-wrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectWrapper>
      <Layout>{children}</Layout>
    </ProtectWrapper>
  );
}
