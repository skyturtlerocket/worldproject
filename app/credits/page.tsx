import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Credits — Divided Ground",
  description: "Project credits and acknowledgments for Divided Ground.",
};

export default function CreditsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-rust">Credits</p>
      <h1 className="mt-3 font-serif text-4xl text-parchment">Acknowledgments</h1>

      <section className="mt-10 space-y-4 border-t border-wall/30 pt-8">
        <h2 className="font-serif text-xl text-parchment">Creator</h2>
        <div className="text-sm leading-relaxed text-parchment/85">
          <p className="text-lg text-parchment">Timothy Ha</p>
          <p>Hampton High School</p>
          <p>10th Grade — AP World History</p>
        </div>
      </section>

      <section className="mt-10 space-y-4 border-t border-wall/30 pt-8">
        <h2 className="font-serif text-xl text-parchment">APIs &amp; services</h2>
        <ul className="space-y-4 text-sm leading-relaxed text-parchment/85">
          <li>
            <strong className="text-parchment">Google Maps Platform</strong> —
            Street View panoramas and embedded 360° imagery via the{" "}
            <a
              href="https://developers.google.com/maps/documentation/javascript/streetview"
              target="_blank"
              rel="noreferrer"
              className="text-rust underline hover:text-parchment"
            >
              Maps JavaScript API
            </a>{" "}
            and{" "}
            <a
              href="https://developers.google.com/maps/documentation/embed/embedding-map"
              target="_blank"
              rel="noreferrer"
              className="text-rust underline hover:text-parchment"
            >
              Maps Embed API
            </a>
            . Historical copy and tour structure are original to this project;
            map imagery © Google.
          </li>
          <li>
            <strong className="text-parchment">Next.js &amp; React</strong> —
            site framework ({" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="text-rust underline hover:text-parchment"
            >
              Vercel
            </a>
            ).
          </li>
          <li>
            <strong className="text-parchment">Tailwind CSS</strong> — styling.
          </li>
          <li>
            <strong className="text-parchment">@googlemaps/js-api-loader</strong>{" "}
            — loading the Maps JavaScript API in the browser.
          </li>
        </ul>
      </section>

      <section className="mt-10 space-y-3 border-t border-wall/30 pt-8 text-sm text-parchment/70">
        <h2 className="font-serif text-xl text-parchment">Educational use</h2>
        <p className="leading-relaxed">
          This site was built as a student AP World History project exploring how
          the Cold War divided communities in Germany and Korea.
        </p>
      </section>

      <p className="mt-12">
        <Link
          href="/"
          className="text-sm text-rust hover:underline"
        >
          ← Back to home
        </Link>
      </p>
    </main>
  );
}
