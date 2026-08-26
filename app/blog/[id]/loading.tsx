import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 dark:from-slate-900 dark:via-slate-800 dark:to-navy-900">
      <div className="mx-auto max-w-4xl space-y-6 p-6 pt-24">
        <div className="mb-12 flex items-center justify-center">
          <div className="flex items-center gap-2 text-sage-600 dark:text-gold-400">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-sage-600 border-t-transparent dark:border-gold-400" />
            <span className="text-sm font-medium">Loading article...</span>
          </div>
        </div>
        <Skeleton className="mx-auto h-12 w-3/4" />
        <Skeleton className="mx-auto h-6 w-1/2" />
        <div className="mt-12 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <div className="mt-8 space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-9/12" />
        </div>
      </div>
    </div>
  );
}
