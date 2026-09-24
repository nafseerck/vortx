export const INVESTOR_AUTH_COOKIE = "blastx_session"
export const CUSTOMER_AUTH_COOKIE = "blastx_customer_session"

export const DEFAULT_INVESTOR_PASSWORD = "Blastxdryice@2026"
export const DEFAULT_CUSTOMER_PASSWORD = "Customersdryice@2026"

export function getInvestorPassword() {
  return process.env.SITE_PASSWORD || DEFAULT_INVESTOR_PASSWORD
}

export function getCustomerPassword() {
  return process.env.CUSTOMER_SITE_PASSWORD || DEFAULT_CUSTOMER_PASSWORD
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

/**
 * Derives an unforgeable session token from a password.
 */
export async function createSessionToken(password: string, scope = "blastx-access-v1") {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  )
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(scope))
  return toHex(signature)
}

export async function expectedInvestorSessionToken() {
  const password = getInvestorPassword()
  return createSessionToken(password, "blastx-investor-v1")
}

export async function expectedCustomerSessionToken() {
  const password = getCustomerPassword()
  return createSessionToken(password, "blastx-customer-v1")
}
