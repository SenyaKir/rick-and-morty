import Image from 'next/image'


export default function Home() {
  return (
    <main className='main'>
      <section className='intro'>
      <h1 className="sr-only">Rick & Morty - encyclopedia</h1>
      <Image
        src="/Rick_and_Morty_logo.svg"
        alt="Rick and Morty"
        width={700}
        height={700}
      />
      <p>
        Wubba Lubba Dub Dub &bull; The universe in your browser
      </p>
      </section>
      <section className='stats'>
        <div className='stat-card'>
          <p>200</p>
          <p>characters</p>
        </div>
        <div className='stat-card'>
          <p>40</p>
          <p>episodes</p>
        </div>
        <div className='stat-card'>
          <p>120</p>
          <p>locations</p>
        </div>
      </section>

    </main>
  );
}
