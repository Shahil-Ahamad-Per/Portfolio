import { Skeleton } from "@/components/ui/skeleton"

export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
      <div className="p-6 space-y-6 max-w-4xl mx-auto pt-24">
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2 text-sage-600 dark:text-gold-400">
            <div className="w-5 h-5 border-2 border-sage-600 dark:border-gold-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-sm font-medium">Loading article...</span>
          </div>
        </div>
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-1/2 mx-auto" />
        <div className="space-y-4 mt-12">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="space-y-4 mt-8">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-9/12" />
        </div>
      </div>
    </div>
  )
}
