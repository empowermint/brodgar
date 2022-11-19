import Image from 'next/image'

export default function Hero() {
  return (
    <section class="hero">
      <Image
        alt="The ring of Brodgar standing stones at sunset"
        src="/img/IMG_2145.jpg"
        layout="fill"
      />
      <div className="hero-content">
        <h1>Rewilding: Brodgar Poetry/Sound Walk</h1>
        <div class="hero-buttons">
          <button>Walk in Person</button>
          <button>Experience Online</button>
        </div>
      </div>
      <figure className="hero-bg-words">
        <figcaption>The text of this poem is animated, gliding through the points of the stone circle.</figcaption>
        <span>I am flitting white moths, the souls of the dead;</span>
        <span>I am the gaping eye that contains all loss;</span>
        <span>I am your lost country, the lover who left;</span>
        <span>I am ice the curlew’s beak cannot penetrate;</span>
        <span>I am unseasonable snow freezing the lapwing chicks;</span>
        <span>I am the smirk, the giggle in sacred places;</span>
        <span>I am the still centre of the hurtling universe;</span>
        <span>I am slow time, the diurnal movement of light and the shadow encroaching lichen-encrusted skin;</span>
        <span>I am the constellations streaming across the heavens;</span>
        <span>I am the rhythm of wingbeats and cries, skeins of migrating geese;</span>
        <span>I am the shaft of sun that enters the stone womb of Maes Howe;</span>
        <span>I am mid-winter solstice when darkness will give way to light.</span>
      </figure>
    </section>
  )
}
