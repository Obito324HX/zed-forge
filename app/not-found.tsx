import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-ff-gold">404</p>
      <h1 className="mt-4 font-heading text-5xl font-extrabold text-ff-text sm:text-6xl">
        Page not found.
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-ff-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 bg-ff-ember px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a8461f]"
      >
        Back to Home
      </Link>
    </main>
  );
}
