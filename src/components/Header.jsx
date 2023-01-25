import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/header.scss'

export default function Header() {
  return (
    <div className='header-wrapper'>
      <div className="header-center-text">
        <h3>Hello from Header!</h3>
      </div>
      <div className="hamburger"
        onClick={alert('do you want fries with that?')}
      >
        <MenuIcon 
        />
      </div>
    </div>
  )
}

