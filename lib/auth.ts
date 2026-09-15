export const AUTH_COOKIE = "blstx_session"
export const DEFAULT_INVESTOR_PASSWORD = "Blstxdryice@2026"

export function getInvestorPassword() {
  return process.env.SITE_PASSWORD || DEFAULT_INVESTOR_PASSWORD
}

// Web Crypto is available in both the Node and Edge runtimes, so this helper
// works from server actions and from middleware without any Node-only APIs.
function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

/**
 * Derives an unforgeable session token from the site password. The raw
 * password is never stored in the cookie; we store an HMAC of a fixed
 * message keyed by the password. Middleware recomputes and compares.
 */
export async function createSessionToken(password: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode("blstx-access-v1"))
  return toHex(signature)
}

export async function expectedSessionToken() {
  const password = getInvestorPassword()
  return createSessionToken(password)
}
