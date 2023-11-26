import type { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import * as API from "@/axios/auth";
import { UserInterface } from "@/interfaces/user";
import { AdapterUser } from "next-auth/adapters";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const data = await API.loginUser({
          email: credentials.email,
          password: credentials.password,
        });

        if (data?.user) {
          return {
            ...data.user,
            token: data.token,
          } as UserInterface;
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }) {
      // console.log("user", token.user);
      session.user = token.user as AdapterUser;
      console.log("session", session);

      return session;
    },
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
};

// export interface DefaultUser {
//   id: string
//   name?: string | null
//   email?: string | null
//   image?: string | null
// }
