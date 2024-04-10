// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className={'navbar ${active ? "active" : ""}'}>
      <a className='link' href='/'>
        Home
      </a>
      <a className='link' href='/shop'>
        Shop
      </a>
      <a className='link' href='/blog'>
        Blog
      </a>
      <a className='link' href='/review'>
        Review
      </a>
      <a className='link' href='/contact'>
        Contact
      </a>
      <a className='link' href='/about'>
        About
      </a>
    </nav>
  )
}

NavBar.PropTypes = {
  active: PropTypes.bool
}.isRequired

export default NavBar
