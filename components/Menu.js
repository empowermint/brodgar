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
            <Link href="/biographies">
              <a className="main-menu__link">Biographies</a>
            </Link>
          </li>
          <li class="sub-menu__parent">
            <Link href="/take-part">
              <a className="main-menu__link">Take Part</a>
            </Link>
            <ul className="sub-menu">
              <li>
                <Link href="/take-part/getting-to-brodgar">
                  <a className="sub-menu__link">Directions</a>
                </Link>
              </li>
              <li>
                <Link href="/take-part/suggested-route">
                  <a className="sub-menu__link">Suggested Route</a>
                </Link>
              </li>
            </ul>
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
