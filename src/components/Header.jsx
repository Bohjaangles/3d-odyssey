import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/header.scss'

export default function Header() {
  function hamburgler() {
    alert('Would you like fries with that?')
  }

  return (
    <div className='header-wrapper' >
      <div className="header-center-text">
        <h3>3D-ODYSSEY</h3>
      </div>
      <div className="hamburger"
        onClick={hamburgler}
      >
        <MenuIcon 
        />
      </div>
    </div>
  )
}

