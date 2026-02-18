const rateLimitMap = new Map<string, number[]>()

// Clean up expired entries every 10 minutes
const CLEANUP_INTERVAL = 10 * 60 * 1000
setInterval(() => {
  const now = Date.now()
  for (const [key, timestamps] of rateLimitMap.entries()) {
    const valid = timestamps.filter((t) => now - t < 60 * 60 * 1000)
    if (valid.length === 0) {
      rateLimitMap.delete(key)
    } else {
      rateLimitMap.set(key, valid)
    }
  }
}, CLEANUP_INTERVAL)

interface RateLimitResult {
  success: boolean
  remaining: number
}

export function rateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 60 * 60 * 1000
): RateLimitResult {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip) ?? []
  const recent = timestamps.filter((t) => now - t < windowMs)

  if (recent.length >= limit) {
    return { success: false, remaining: 0 }
  }

  recent.push(now)
  rateLimitMap.set(ip, recent)

  return { success: true, remaining: limit - recent.length }
}
