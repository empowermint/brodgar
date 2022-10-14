import Image from 'Next/Image'

export default function Hero() {
  return (
    <section class="hero">
      <Image
        alt="The ring of Brodgar standing stones at sunset"
        src="/img/IMG_2145.jpg"
        layout="fill"
      />
      <div class="hero-content">
        <h1>Brodgar Poetry/Sound Walk</h1>
        <div class="hero-buttons">
          <button>Walk in Person</button>
          <button>Experience Online</button>
        </div>
      </div>
    </section>
  )
}
