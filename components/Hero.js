import Image from 'next/image'
import imgSunset from '../public/img/IMG_2145.jpg'

export default function Hero() {
  return (
    <section class="hero">
      <Image
        alt="The ring of Brodgar standing stones at sunset"
        src={imgSunset}
      />
      <div className="hero-content">
        <h1>Rewilding: Brodgar Umbrella Poetry Sound Walk</h1>
        <div class="hero-buttons">
          <button>Walk in Person</button>
          <button>Experience Online</button>
        </div>
      </div>
    </section>
  )
}
