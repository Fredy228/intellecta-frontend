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
        // return { email: credentials?.email} as User;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token, user }) {
      console.log("user", token.user);
      //token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ItCe0LvQtdC60YHRltC5Iiwic3ViIjoxMzAyLCJpYXQiOjE2OTgxNTUyMzUsImV4cCI6MTY5ODE1ODgzNX0.caJH_9Qsst08nVcY-2p1OKX_lZw1n2L6uQuPTvrtQKo"
      //token: "eyJhbGciOiJIUzI1NiIsInR5cC
      session.user = token.user as AdapterUser;

      return session;
    },
  },
  jwt: {
    maxAge: 60 * 60,
  },
  pages: {
    signIn: "/sign-in",
    error: "/sign-in",
  },
};
