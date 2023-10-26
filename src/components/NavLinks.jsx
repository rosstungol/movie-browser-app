import { Link } from "react-router-dom"

const NavLinks = () => {
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <Link className='nav-link active' aria-current='page' to='/'>
          Home
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/about'>
          About
        </Link>
      </li>
      <li className='nav-item'>
        <a className='nav-link disabled' aria-disabled='true'>
          Coming soon
        </a>
      </li>
    </ul>
  )
}

export default NavLinks
