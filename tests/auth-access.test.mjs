import assert from 'node:assert/strict';
import { test } from 'node:test';
import { canAccess, isAllowedEmail, isAuthorizedGoogleProfile, isAuthConfigured } from '../src/auth/access.ts';

test('exact allowlist matching, Google verification and revocation', () => {
  const original = { ...process.env };
  try {
    process.env.ALLOWED_GOOGLE_EMAILS = ' Owner@Example.com , second@gmail.com ';
    assert.equal(isAllowedEmail('owner@example.com'), true);
    assert.equal(isAllowedEmail('SECOND@gmail.com'), true);
    for (const email of [null, undefined, '', 'other@example.com', 'owner+alias@example.com', 'owner@example.com.evil']) {
      assert.equal(isAllowedEmail(email), false);
    }
    assert.equal(isAuthorizedGoogleProfile({ email: 'owner@example.com', email_verified: true }), true);
    for (const profile of [null, {}, { email: 'owner@example.com' }, { email: 'owner@example.com', email_verified: 'true' }, { email: 'other@example.com', email_verified: true }]) {
      assert.equal(isAuthorizedGoogleProfile(profile), false);
    }
    const token = { email: 'owner@example.com', googleVerified: true };
    assert.equal(canAccess(token), true);
    assert.equal(canAccess({ ...token, googleVerified: false }), false);
    assert.equal(canAccess({ email: token.email }), false);
    assert.equal(canAccess(null), false);
    process.env.ALLOWED_GOOGLE_EMAILS = 'second@gmail.com';
    assert.equal(canAccess(token), false);
    process.env.ALLOWED_GOOGLE_EMAILS = '';
    assert.equal(isAllowedEmail(token.email), false);
    process.env.ALLOWED_GOOGLE_EMAILS = '*@example.com';
    assert.equal(isAllowedEmail(token.email), false);

    process.env.NEXTAUTH_SECRET = 'test-only';
    process.env.GOOGLE_CLIENT_ID = 'test-only';
    process.env.GOOGLE_CLIENT_SECRET = 'test-only';
    process.env.ALLOWED_GOOGLE_EMAILS = token.email;
    assert.equal(isAuthConfigured(), true);
    for (const name of ['NEXTAUTH_SECRET', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'ALLOWED_GOOGLE_EMAILS']) {
      const value = process.env[name];
      delete process.env[name];
      assert.equal(isAuthConfigured(), false);
      process.env[name] = value;
    }
  } finally {
    process.env = original;
  }
});
