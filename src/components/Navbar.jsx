import NavLinks from "./NavLinks"
import { Link, useNavigate } from "react-router-dom"

const Navbar = ({ searchText, onSearchTextChange }) => {
  const navigate = useNavigate()

  const handleSearchTextChange = (e) => {
    navigate("/search")
    onSearchTextChange(e.target.value)
  }

  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          Movie Browser
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <NavLinks />
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              value={searchText}
              onChange={handleSearchTextChange}
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
