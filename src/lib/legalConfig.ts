import { env } from '$env/dynamic/public';

/**
 * Operator / legal details for the Legal Notice, Privacy Policy and Terms.
 *
 * Injected at BUILD time via PUBLIC_LEGAL_* environment variables (see
 * `.env.example`) so the public source carries no personal address. Because the
 * site is statically prerendered, these values are baked in when the image is
 * built — to change them, rebuild. Unset values fall back to obvious
 * placeholders so a misconfigured build is visibly incomplete rather than blank.
 */
export const legalConfig = {
  name: env.PUBLIC_LEGAL_NAME || '[Operator name — set PUBLIC_LEGAL_NAME]',
  street: env.PUBLIC_LEGAL_STREET || '[Street]',
  postalCode: env.PUBLIC_LEGAL_POSTAL_CODE || '[Postal code]',
  city: env.PUBLIC_LEGAL_CITY || '[City]',
  country: env.PUBLIC_LEGAL_COUNTRY || '[Country]',
  email: env.PUBLIC_LEGAL_EMAIL || 'hello@openmapx.org',
  privacyEmail: env.PUBLIC_LEGAL_PRIVACY_EMAIL || 'privacy@openmapx.org',
  responsible: env.PUBLIC_LEGAL_RESPONSIBLE || '[Responsible person — set PUBLIC_LEGAL_RESPONSIBLE]',
  jurisdiction: env.PUBLIC_LEGAL_JURISDICTION || 'Germany',
  logRetentionDays: env.PUBLIC_LEGAL_LOG_RETENTION_DAYS || '30',
};
