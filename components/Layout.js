import Head from 'next/head';
import Link from 'next/link';
import Menu from './Menu';

export default function Layout({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title} | Rewilding: Brodgar Poetry/Sound Walk</title>
        <meta name="description" content={meta.description}></meta>
      </Head>
      <header className="header">
        <Link href="./">
          <a className="site-title">Rewilding</a>
        </Link>
        <Menu />
      </header>
      <main>{children}</main>
      <footer>
        <p>Content copyright © { new Date(Date.now()).getFullYear() } Stephanie Green and Sonja Heyer. All rights reserved.</p>
      </footer>
    </>
  )
}
