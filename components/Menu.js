import Link from 'next/link'
import { useState } from 'react'

export default function Menu() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <>
      <nav id="main-menu" className={isNavExpanded ? "menu-show" : "menu-hide"}>
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
          <li className="sub-menu__parent">
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
            <Link href="/who">
              <a className="main-menu__link">Who</a>
            </Link>
          </li>
          <li>
            <Link href="/poems">
              <a className="main-menu__link">Experience Online</a>
            </Link>
          </li>
        </ul>
      </nav>
      <a href="#" id="menu-toggle" aria-controls="main-menu" onClick={handleClick}>
          <img src="brodgar-icon-min.svg" alt="Silhouette of the Ring of Brodgar" />
          <span className="sr-only">Menu</span>
      </a>
    </>
  )
}
