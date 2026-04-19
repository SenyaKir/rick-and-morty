import Link from "next/link";


export default function Header() {
  return (
    <header>
      <span className="font-mono">Rick and Morty</span>
      <nav className="font-sans">
        <Link href="/">Home</Link>
        <Link href="/characters">Characters</Link>
        <Link href="/episode">Episode</Link>
        <Link href="/location">Location</Link>
      </nav>
    </header>
  );
}
