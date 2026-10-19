import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { isAllowedEmail, isAuthorizedGoogleProfile } from './access';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: { params: { prompt: 'select_account' } },
    }),
  ],
  session: { strategy: 'jwt', maxAge: 8 * 60 * 60 },
  callbacks: {
    async signIn({ account, profile }) {
      return account?.provider === 'google' && isAuthorizedGoogleProfile(profile);
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.googleVerified = account.provider === 'google' && isAuthorizedGoogleProfile(profile);
        token.email = profile?.email?.trim().toLowerCase() ?? null;
      }
      // Recheck existing sessions after an allowlist change, too.
      if (!isAllowedEmail(token.email)) token.googleVerified = false;
      return token;
    },
    async session({ session, token }) {
      if (session.user && (token.googleVerified !== true || !isAllowedEmail(token.email))) {
        session.user.email = null;
      }
      return session;
    },
  },
  theme: { colorScheme: 'light', brandColor: '#34584c' },
};
