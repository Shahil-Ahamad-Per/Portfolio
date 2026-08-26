import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-cream-50 to-sage-50 px-6 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
      <div className="max-w-md text-center">
        <div className="mb-6 text-8xl">😢</div>
        <h1 className="mb-4 font-serif text-5xl font-bold text-charcoal-800 dark:text-slate-100">
          404
        </h1>
        <p className="mb-8 text-xl text-charcoal-600 dark:text-slate-300">
          Page not found. The page you&apos;re looking for doesn&apos;t exist or
          has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-lg bg-sage-600 px-6 py-3 text-white transition-colors hover:bg-sage-700 dark:bg-gold-500 dark:hover:bg-gold-600"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
