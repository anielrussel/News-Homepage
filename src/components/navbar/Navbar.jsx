import React from 'react'
import { useState } from 'react'
import './navbar.css'
import logo from '../../images/logo.svg'
import toggle from '../../images/icon-menu.svg'
import close from '../../images/icon-menu-close.svg'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <><><div className='logo'>
      <img src={logo} alt='logo' />
    </div>
      <nav>
      <div className='menu'>
      <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
      </nav></>
      <div className='toggle-nav'>
        {toggleMenu
          ? <img src={close} alt='' onClick={() => setToggleMenu(false)} />
          : <img src={toggle} alt='' onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='toggle-container'>
          <div className='toggle-menu'>
             <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
            </div>
            </div>
        )}
      </div></>
          
  )
}

export default Navbar