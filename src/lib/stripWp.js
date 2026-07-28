// Cloudways staging origin → production origin
const WP_ORIGIN = 'https://wordpress-1301750-6506622.cloudwaysapps.com';
const PUB_ORIGIN = import.meta.env.PUBLIC_SITE_URL || 'https://usplayercheck.com';

// Escape for use inside a RegExp
const escaped = WP_ORIGIN.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const RE = new RegExp(escaped, 'g');

/**
 * Recursively replace the Cloudways staging origin with the production origin.
 * Handles strings, arrays, and plain objects (JSON-LD, GraphQL responses, etc).
 */
export function stripWp(input) {
  if (input == null) return input;
  if (typeof input === 'string') return input.replace(RE, PUB_ORIGIN);
  if (Array.isArray(input)) return input.map(stripWp);
  if (typeof input === 'object') {
    const out = {};
    for (const k in input) out[k] = stripWp(input[k]);
    return out;
  }
  return input;
}