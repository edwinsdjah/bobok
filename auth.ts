import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { prisma } from './lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
  },
});
