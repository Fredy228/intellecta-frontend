import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import type { Metadata } from "next";
import React from "react";
import { ToastContainer } from "react-toastify";

import { Providers } from "@/components/providers/providers";
import { AuthProviders } from "@/components/providers/auth-propvider";

export const metadata: Metadata = {
  title: "Intellecta",
  description: "Application for learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <Providers>
        <AuthProviders>
          <body>
            {children}
            <ToastContainer
              position="top-right"
              autoClose={3000}
              limit={3}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </body>
        </AuthProviders>
      </Providers>
    </html>
  );
}
