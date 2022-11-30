import Layout from "../components/Layout"
import Photo from "../components/Photo"
import AudioPlayer from "../components/AudioPlayer"

import Lapwings from "../poems/deceit-of-lapwings.mdx"
import Ring from "../poems/at-the-ring-of-brodgar.mdx"
import Loch from "../poems/down-to-the-loch.mdx"
import Bumblebee from "../poems/great-yellow-bumblebee.mdx"
import Birdsong from "../poems/no-more-birdsong.mdx"
import Peewit from "../poems/peewit.mdx"
import Stone from "../poems/stone-water-sky.mdx"
import Curlew from "../poems/alternative-names-for-curlew.mdx"

export default function Poems() {
  const meta = {
    title: "Listen Online",
    description: "Experience the walk online"
  }

  return (
    <Layout meta={meta} className="poetry-page">
      <section>
        <Photo src="/img/photo s1.jpg" alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_ Brodgar UMBRELLA_verse 1.mp3" />
        <div className="poem">
          <Stone />
        </div>
      </section>
      <section>
        <Photo src="/img/photo s2.jpg" alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_ Brodgar UMBRELLA_verse 2.mp3" />
        <div className="poem">
          <Lapwings />
        </div>
      </section>
      <section>
        <Photo src="/img/photo s3.jpg" alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_ Brodgar UMBRELLA_verse 3.mp3" />
        <div className="poem">
          <Loch />
        </div>
      </section>
      <section>
        <Photo src="/img/photo s4.jpg" alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_ Brodgar UMBRELLA_verse 4.mp3" />
        <div className="poem">
          <Bumblebee />
        </div>
      </section>
      <section>
        <Photo src="/img/photo s5.jpg" alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_ Brodgar UMBRELLA_verse 5.mp3" />
        <div className="poem">
          <Peewit />
        </div>
      </section>
      <section>
        <Photo src="/img/photo s6.jpg" alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_ Brodgar UMBRELLA_verse 6.mp3" />
        <div className="poem">
          <Curlew /> 
        </div>
      </section>
      <section>
        <Photo src="/img/photo s7.jpg" alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_ Brodgar UMBRELLA_verse 7.mp3" />
        <div className="poem">
          <Birdsong />
        </div>
      </section>
      <section>
        <Photo src="/img/photo s8.jpg" alt="TBC" />
        <AudioPlayer src="./audio/Rewilding_ Brodgar UMBRELLA_verse 8.mp3" />
        <div className="poem">
          <Ring /> 
        </div>
      </section>
    </Layout>
  )
}
