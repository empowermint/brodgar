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
        </ul>
      </nav>
    </>
  )
}
