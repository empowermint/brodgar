import Head from 'next/head';
import Menu from './Menu';
import Link from 'next/link';

export default function Layout({ title, children, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <header className="header">
        <Link href="./">
          <a className="site-title"><h3>Brodgar Poetry/Sound Walk</h3></a>
        </Link>
        <Menu />
      </header>
      <main>{children}</main>
      <!-- Footer goes here if we decide to use one -->
    </>
  )
}

Layout.defaultProps = {
  title: 'Brodgar Poetry/Sound Walk'
  description: 'A poetry/sound experience for Brodgar in Orkney'
};