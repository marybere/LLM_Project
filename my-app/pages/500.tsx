import Link from "next/link";

export default function Custom500() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-8xl animate-bounce">⚠️</div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Internal Error
        </h1>
        <p className="text-muted-foreground text-lg max-w-sm mx-auto">
          An issue has occurred. Our team has been notified. Please try again later.
        </p>
        <div className="space-y-3">
          <Link href="/" className="btn-primary inline-block">
            Back to home
          </Link>
          <p className="text-xs text-muted-foreground mt-4">
            If the problem persists, contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
