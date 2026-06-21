export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="animate-pulse space-y-4">
        <div className="mx-auto flex items-center justify-center gap-2 mb-8">
          <div className="h-2 w-2 rounded-full bg-info animate-bounce" style={{ animationDelay: "0ms" }} />
          <div className="h-2 w-2 rounded-full bg-info animate-bounce" style={{ animationDelay: "150ms" }} />
          <div className="h-2 w-2 rounded-full bg-info animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
        <div className="mx-auto h-8 w-48 rounded bg-muted" />
        <div className="mx-auto h-4 w-72 rounded bg-muted" />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="aspect-square rounded-xl bg-muted" />
              <div className="h-4 w-3/4 rounded bg-muted" />
              <div className="h-4 w-1/2 rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
