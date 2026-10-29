import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section grid min-h-[70dvh] place-items-center pt-32 text-center">
      <div>
        <h1 className="h-display text-6xl">404</h1>
        <p className="mt-4 text-lg text-zinc-600">We couldn&apos;t find that page.</p>
        <Link href="/" className="btn btn-dark mt-6">Back to home</Link>
      </div>
    </section>
  );
}
