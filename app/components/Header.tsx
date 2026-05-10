import Link from "next/link";


export default function Header() {
  return (
    <header>
      <span className="font-mono">Rick and Morty</span>
      <nav className="font-sans">
        <Link href="/">Home</Link>
        <Link href="/characters">Characters</Link>
        <Link href="/episodes">Episodes</Link>
        <Link href="/locations">Locations</Link>
      </nav>
    </header>
  );
}
