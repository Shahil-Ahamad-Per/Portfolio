const STORAGE_KEY = "portfolio_contact_submissions"
const DAILY_LIMIT = 5

interface SubmissionRecord {
  count: number
  date: string
}

export function checkRateLimit(): { remaining: number; isLimited: boolean } {
  const storedData = localStorage.getItem(STORAGE_KEY)
  if (!storedData) {
    return { remaining: DAILY_LIMIT, isLimited: false }
  }

  const record: SubmissionRecord = JSON.parse(storedData)
  const today = new Date().toDateString()

  if (record.date !== today) {
    localStorage.removeItem(STORAGE_KEY)
    return { remaining: DAILY_LIMIT, isLimited: false }
  }

  return {
    remaining: Math.max(0, DAILY_LIMIT - record.count),
    isLimited: record.count >= DAILY_LIMIT,
  }
}

export function incrementSubmissionCount(): { count: number; isLimited: boolean } {
  const storedData = localStorage.getItem(STORAGE_KEY)
  const today = new Date().toDateString()

  let count = 0
  if (storedData) {
    const record: SubmissionRecord = JSON.parse(storedData)
    count = record.date === today ? record.count : 0
  }

  count += 1
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ count, date: today }))

  return { count, isLimited: count >= DAILY_LIMIT }
}
