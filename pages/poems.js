import Layout from "../components/Layout"

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
        <div className="poem">
          <Stone />
        </div>
      </section>
      <section>
        <div className="poem">
          <Lapwings />
        </div>
      </section>
      <section>
        <div className="poem">
          <Loch />
        </div>
      </section>
      <section>
        <div className="poem">
          <Bumblebee />
        </div>
      </section>
      <section>
        <div className="poem">
          <Peewit />
        </div>
      </section>
      <section>
        <div className="poem">
          <Curlew /> 
        </div>
      </section>
      <section>
        <div className="poem">
          <Birdsong />
        </div>
      </section>
      <section>
        <div className="poem">
          <Ring /> 
        </div>
      </section>
    </Layout>
  )
}
