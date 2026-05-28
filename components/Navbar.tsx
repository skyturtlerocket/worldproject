import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/tour/germany", label: "Germany" },
  { href: "/tour/korea", label: "Korea" },
  { href: "/credits", label: "Credits" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-wall/30 bg-ink/95 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="font-serif text-lg text-parchment transition hover:text-rust"
        >
          Divided Ground
        </Link>
        <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded px-2.5 py-1.5 text-xs uppercase tracking-widest text-parchment/70 transition hover:bg-wall/10 hover:text-parchment sm:text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
