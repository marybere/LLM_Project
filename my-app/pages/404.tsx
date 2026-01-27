import Link from "next/link";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div className="text-8xl animate-bounce">🔍</div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Page not found
        </h1>
        <p className="text-muted-foreground text-lg max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Back to home
        </Link>
      </div>
    </div>
  );
}
