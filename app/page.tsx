import Link from "next/link";

const regions = [
  {
    slug: "germany",
    title: "Germany",
    subtitle: "Berlin, 1945–1989",
    blurb:
      "One of the most iconic walls in history, the Berlin Wall separated East and West Berlin for over 28 years.",
    available: true,
  },
  {
    slug: "korea",
    title: "Korea",
    subtitle: "The 38th Parallel, 1945–present",
    blurb:
      "The Korean War was a Cold War proxy war between the United States and the Soviet Union, separating the two Koreas for over 70 years.",
    available: true,
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <header className="border-b border-wall/30 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-rust">
          A Cold War virtual tour
        </p>
        <h1 className="mt-3 font-serif text-5xl leading-tight text-parchment md:text-6xl">
          Divided Grounds
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-parchment/80">
          The Cold War didn&apos;t just split governments as it split countries,
          cities, families, and communities. This
          project is a virtual tour of the places that symbolize the divisions caused by the Cold War that you can still see today.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {regions.map((r) => {
          const card = (
            <div
              className={`group h-full rounded-xl border bg-ink/60 p-6 transition ${
                r.available
                  ? "border-wall/40 hover:border-rust hover:bg-ink"
                  : "border-wall/20 opacity-60"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h2 className="font-serif text-2xl text-parchment">{r.title}</h2>
                <span className="text-xs uppercase tracking-widest text-parchment/60">
                  {r.available ? "Open" : "Coming soon"}
                </span>
              </div>
              <p className="mt-1 text-sm text-parchment/60">{r.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-parchment/80">
                {r.blurb}
              </p>
              {r.available && (
                <p className="mt-6 text-sm font-semibold text-rust group-hover:underline">
                  Begin the tour →
                </p>
              )}
            </div>
          );

          return r.available ? (
            <Link key={r.slug} href={`/tour/${r.slug}`} className="block">
              {card}
            </Link>
          ) : (
            <div key={r.slug}>{card}</div>
          );
        })}
      </section>

      <footer className="mt-16 border-t border-wall/30 pt-6 text-xs text-parchment/50">
        Built for my AP World Final Project. Virtual tour credits to Google Street View API.
      </footer>
    </main>
  );
}
