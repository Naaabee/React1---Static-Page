import React from 'react'
import "../components/Header.css"

export default function Header() {
  return (
    <header>
        <nav>
            <img src={require("../images/React_logo_wordmark.png")} alt='react-logo' width={'150px'}/>
            <ul className='nav--list'>
                <li><a href='www.home.com'>Home</a></li>
                <li><a href='www.about.com'>About</a></li>
                <li><a href='www.contact.com'>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}
