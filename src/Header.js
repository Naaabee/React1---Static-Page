import './Header.css'
import React from 'react'

export default function Header() {
  return (
    <header>
        <nav className='nav-sec'>
            <img src={require("./React_logo_wordmark.png")} alt='react-logo' width={'150px'}/>
            <ul className='navlist'>
                <li><a href='www.home.com'>Home</a></li>
                <li><a href='www.about.com'>About</a></li>
                <li><a href='www.contact.com'>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
