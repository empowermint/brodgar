import Image from "next/image"

import Layout from "../components/Layout"
import AudioPlayer from "../components/AudioPlayer"

import Stone from "../poems/stone-water-sky.mdx"
import imgStone from "../public/img/photo_s1.jpg"

import Lapwings from "../poems/deceit-of-lapwings.mdx"
import imgLapwings from "../public/img/photo_s2.jpg"

import Loch from "../poems/down-to-the-loch.mdx"
import imgLoch from "../public/img/photo_s3.jpg"

import Bumblebee from "../poems/great-yellow-bumblebee.mdx"
import imgBumblebee from "../public/img/photo_s4.jpg"

import Peewit from "../poems/peewit.mdx"
import imgPeewit from "../public/img/photo_s5.jpg"

import Curlew from "../poems/alternative-names-for-curlew.mdx"
import imgCurlew from "../public/img/photo_s6.jpg"

import Birdsong from "../poems/no-more-birdsong.mdx"
import imgBirdsong from "../public/img/photo_s7.jpg"

import Ring from "../poems/at-the-ring-of-brodgar.mdx"
import imgRing from "../public/img/photo_s8.jpg"

export default function Poems() {
  const meta = {
    title: "Listen Online",
    description: "Experience the walk online"
  }

  return (
    <Layout meta={meta} className="poetry-page">
      <section>
        <Image src={imgStone} alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_Brodgar_p1.mp3" />
        <div className="poem">
          <Stone />
        </div>
      </section>
      <section>
      <Image src={imgLapwings} alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_Brodgar_p2.mp3" />
        <div className="poem">
          <Lapwings />
        </div>
      </section>
      <section>
        <Image src={imgLoch} alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_Brodgar_p3.mp3" />
        <div className="poem">
          <Loch />
        </div>
      </section>
      <section>
        <Image src={imgBumblebee} alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_Brodgar_p4.mp3" />
        <div className="poem">
          <Bumblebee />
        </div>
      </section>
      <section>
        <Image src={imgPeewit} alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_Brodgar_p5.mp3" />
        <div className="poem">
          <Peewit />
        </div>
      </section>
      <section>
        <Image src={imgCurlew} alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_Brodgar_p6.mp3" />
        <div className="poem">
          <Curlew /> 
        </div>
      </section>
      <section>
        <Image src={imgBirdsong} alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_Brodgar_p7.mp3" />
        <div className="poem">
          <Birdsong />
        </div>
      </section>
      <section>
        <Image src={imgRing} alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_Brodgar_p8.mp3" />
        <div className="poem">
          <Ring /> 
        </div>
      </section>
    </Layout>
  )
}
