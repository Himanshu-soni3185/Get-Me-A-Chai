import User from "@/models/User";
import connectDB from "@/db/connectDb";

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github" || account.provider === "google") {
        await connectDB();

        if (!user.email) return false;
        let currentUser = await User.findOne({ email: user.email });

        if (!currentUser) {
          const baseUsername = user.email.split("@")[0];

          // 🔥 ensure unique username
          let username = baseUsername;
          let counter = 0;

          while (await User.findOne({ username })) {
            counter++;
            username = `${baseUsername}${counter}`;
          }

          currentUser = await User.create({
            email: user.email,
            username,
            name: user.name,
          });
        }

        user.name = currentUser.name;

        return true;
      }

      return false;
    },

    async session({ session }) {
      await connectDB();

      if (!session?.user?.email) return session;

      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.name = dbUser.name;
        session.user.username = dbUser.username; // ✅ useful for frontend
      }

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };