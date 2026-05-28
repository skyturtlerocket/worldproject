import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-rust">404</p>
      <h1 className="mt-3 font-serif text-4xl text-parchment">
        That tour doesn&apos;t exist yet.
      </h1>
      <p className="mt-4 text-parchment/70">
        Available tours: Germany and Korea.
      </p>
      <Link
        href="/"
        className="mt-8 rounded border border-rust px-4 py-2 text-sm text-parchment hover:bg-rust/20"
      >
        ← Back to Divided Grounds
      </Link>
    </main>
  );
}
