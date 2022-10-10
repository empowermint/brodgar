import Head from 'next/head';
import Menu from './Menu';
import Link from 'next/link';

export default function Layout({ meta, children }) {
  return (
    <>
      <Head>
        <title>{meta.title} | Brodgar Poetry/Sound Walk</title>
        <meta name="description" content={meta.description}></meta>
      </Head>
      <header className="header">
        <Link href="./">
          <a className="site-title"><h3>Brodgar Poetry/Sound Walk</h3></a>
        </Link>
        <Menu />
      </header>
      <main>{children}</main>
      <footer>Content copyright © { new Date(Date.now()).getFullYear() } Stephanie Green and Sonja Heyer. All rights reserved.</footer>
    </>
  )
}
