import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900 px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">😢</div>
        <h1 className="text-5xl font-serif font-bold text-charcoal-800 dark:text-slate-100 mb-4">
          404
        </h1>
        <p className="text-xl text-charcoal-600 dark:text-slate-300 mb-8">
          Page not found. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-sage-600 dark:bg-gold-500 text-white rounded-lg hover:bg-sage-700 dark:hover:bg-gold-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
