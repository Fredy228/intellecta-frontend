import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import * as API from "@/axios/auth";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        // const data = await API.loginUser({
        //   email: credentials.email,
        //   password: credentials.password,
        // });
        //
        // if (data?.user) {
        //   return data.user;
        // }

        return { email: credentials?.email } as User;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
};
