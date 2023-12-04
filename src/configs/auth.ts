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
    async jwt({ token, user, account, profile }) {
      if (user) {
        const userData = user as UserInterface;
        token.user = user;
        token.id = user.id;
        token.accessToken = userData.token;
      }
      // if (account) {
      //   token.accessToken = account.access_token;
      // }
      // console.log("token-jwt", token);
      // console.log("account-jwt", account);
      // console.log("profile-jwt", account);
      return token;
    },
    async session({ session, token, user }) {
      console.log("user-session", user);
      // console.log("token-session", token);
      // console.log("accessToken", token.accessToken);
      session.user = token.user as AdapterUser;
      // console.log("session", session);

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
