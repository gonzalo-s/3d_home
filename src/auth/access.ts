// Server-side policy: exact Google email addresses, never domains or wildcards.
export function isAllowedEmail(email: unknown): email is string {
  if (typeof email !== 'string' || !email.trim()) return false;
  const allowed = (process.env.ALLOWED_GOOGLE_EMAILS ?? '')
    .split(',')
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);
  return allowed.includes(email.trim().toLowerCase());
}

export function canAccess(token: { email?: unknown; googleVerified?: unknown } | null): boolean {
  return token?.googleVerified === true && isAllowedEmail(token.email);
}

export function isAuthorizedGoogleProfile(profile: unknown): profile is { email: string; email_verified: true } {
  return typeof profile === 'object' && profile !== null &&
    'email_verified' in profile && profile.email_verified === true &&
    'email' in profile && isAllowedEmail(profile.email);
}

export function isAuthConfigured(): boolean {
  return Boolean(
    process.env.NEXTAUTH_SECRET &&
    process.env.GOOGLE_CLIENT_ID &&
    process.env.GOOGLE_CLIENT_SECRET &&
    process.env.ALLOWED_GOOGLE_EMAILS?.split(',').some((email) => email.trim()),
  );
}
