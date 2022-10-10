import Link from 'next/link'

export default function Menu() {
  return (
    <>
      <nav id="main-menu">
        <ul className="main-menu">
          <li>
            <Link href="/">
              <a className="main-menu__link">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="main-menu__link">About</a>
            </Link>
          </li>
          <li>
            <Link href="/poems">
              <a className="main-menu__link">Take Part</a>
            </Link>
          </li>
          <li>
            <Link href="/poems">
              <a className="main-menu__link">Experience Online</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
