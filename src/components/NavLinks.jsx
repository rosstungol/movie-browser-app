import { NavLink } from "react-router-dom"

const NavLinks = () => {
  return (
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <NavLink className='nav-link' aria-current='page' to='/'>
          Home
        </NavLink>
      </li>
      <li className='nav-item'>
        <NavLink className='nav-link' to='/about'>
          About
        </NavLink>
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
