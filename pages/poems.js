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
    <Layout meta={meta}>
      <section>
        <Stone />
      </section>
      <section>
        <Lapwings />
      </section>
      <section>
        <Bumblebee />
      </section>
      <section>
        <Loch />
      </section>
      <section>
        <Curlew /> 
      </section>
      <section>
        <Birdsong />
      </section>
      <section>
        <Peewit />
      </section>
      <section>
        <Ring /> 
      </section>
    </Layout>
  )
}
