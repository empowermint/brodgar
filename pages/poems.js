import Layout from "../components/Layout"

import Lapwings from "../poems/deceit-of-lapwings.mdx"

export default function Poems() {
  const meta = {
    title: "Listen Online",
    description: "Experience the walk online"
  }

  return (
    <Layout meta={meta}>
      <section>
        <h1>Section</h1>
        <Lapwings />
      </section>
    </Layout>
  )
}
