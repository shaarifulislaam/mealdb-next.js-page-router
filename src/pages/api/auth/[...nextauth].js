import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     // Use the callback URL if it's relative
  //     if (url.startsWith("/")) return `${baseUrl}${url}`;
  //     // Use the callback URL if it's on the same origin
  //     else if (new URL(url).origin === baseUrl) return url;
  //     return baseUrl;
  //   },
  // },
  pages: {
    signIn: "/redirect-user",
  },
};

export default NextAuth(authOptions);
