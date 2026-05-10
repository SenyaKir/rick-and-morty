import Image from 'next/image'
import { getAllEpisodes, getLocations, getCharacters } from './lib/api'
import Link from 'next/link'


export default async function Home() {
  const { info: charInfo } = await getCharacters()
  const { info: locInfo } = await getLocations()
  const episodes = await getAllEpisodes()

  return (
    <main className='main'>
      <section className='intro'>
      <h1 className="sr-only">Rick & Morty - encyclopedia</h1>
      <Image
        src="/Rick_and_Morty_logo.svg"
        alt="Rick and Morty"
        width={700}
        height={700}
        priority
      />
      <p>
        Wubba Lubba Dub Dub &bull; The universe in your browser
      </p>
      </section>
      <section className='stats'>
        <Link href="/characters" className='stat-card'>
          <p>{charInfo.count}</p>
          <p>characters</p>
        </Link>
        <Link href="/episodes" className='stat-card'>
          <p>{episodes.length}</p>
          <p>episodes</p>
        </Link>
        <Link href="/locations" className='stat-card'>
          <p>{locInfo.count}</p>
          <p>locations</p>
        </Link>
      </section>
    </main>
  );
}