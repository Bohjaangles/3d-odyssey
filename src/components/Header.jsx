import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/header.scss'
import image from "../assets/header.png"

export default function Header() {
  function hamburgler() {
    alert('Would you like fries with that?')
  }

  return (
    <div className='header-wrapper' style={{ backgroundImage: `url(${image})` }}>
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

