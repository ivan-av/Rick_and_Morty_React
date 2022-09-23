import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

import Icon from '../common/Icon'
// import SwitchColor from './SwitchColor'

const NavHeader = () => {
  return (
    <Nav className='navbar navbar-expand-lg sticky-top'>
      <div className='container-fluid'>
        <NormalLink className='navbar-brand' to='/'>WIKI | RICK & MORTY</NormalLink>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <Icon className='bi bi-list' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav m-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLinkPersonalized className='nav-link' to='/'>Characters</NavLinkPersonalized>
            </li>
            <li className='nav-item'>
              <NavLinkPersonalized className='nav-link' to='/episodes'>Episodes</NavLinkPersonalized>
            </li>
            <li className='nav-item'>
              <NavLinkPersonalized className='nav-link' to='/locations'>Locations</NavLinkPersonalized>
            </li>
          </ul>
          <ul className='navbar-nav mr-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              {/* <SwitchColor /> */}
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  // border-bottom: 1px solid var(--border-primary);
  box-shadow: 2px 2px 2px rgb(0,0,0,0.1);
  color: var(--text-primary);
  background-color: #f8f7a8;
`
const NavLinkPersonalized = styled(NavLink)`
  color: black;
  margin-right: 40px;
  font-size: 16px;
  font-weight:600;
  &.active {
    color: var(--text-secondary);
    // border-bottom: 1px solid var(--text-secondary);
  }
  &:hover {
    color: var(--text-secondary);
  }
`
const NormalLink = styled(Link)`
  color: #0d6efd;
  font-size: 20px;
  font-weight:600;
  font-style:cursive;
  padding-left:30px;
  &:hover {
    transition: 0.3s;
    color: coral;
  }
`

export default NavHeader
