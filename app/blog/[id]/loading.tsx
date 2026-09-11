import { Skeleton } from "@/components/ui/skeleton";

export default function BlogDetailLoading() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <div className="mx-auto max-w-[1360px] space-y-6 px-margin py-space-xl pt-28 md:px-margin-tablet lg:px-margin-desktop">
        <div className="mb-12 flex items-center justify-center">
          <div className="flex items-center gap-2 text-primary">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <span className="font-label-sm text-label-sm font-medium uppercase tracking-wider text-on-surface-variant">
              Loading article...
            </span>
          </div>
        </div>
        <Skeleton className="mx-auto h-12 w-3/4 bg-surface-container-high" />
        <Skeleton className="mx-auto h-6 w-1/2 bg-surface-container-high" />
        <div className="mt-12 space-y-4">
          <Skeleton className="h-4 w-full bg-surface-container-high" />
          <Skeleton className="h-4 w-11/12 bg-surface-container-high" />
          <Skeleton className="h-4 w-4/5 bg-surface-container-high" />
          <Skeleton className="h-4 w-full bg-surface-container-high" />
          <Skeleton className="h-4 w-3/4 bg-surface-container-high" />
        </div>
        <div className="mt-8 space-y-4">
          <Skeleton className="h-4 w-full bg-surface-container-high" />
          <Skeleton className="h-4 w-10/12 bg-surface-container-high" />
          <Skeleton className="h-4 w-full bg-surface-container-high" />
          <Skeleton className="h-4 w-9/12 bg-surface-container-high" />
        </div>
      </div>
    </div>
  );
}
