import React from 'react'
import "../components/Header.css"
// import { useState} from "react"

export default function Header(props) {

  const styles = {
    backgroundColor: props.on ? "#21222A" : "#FFFFFF",
    borderBottom: props.on ? "none" : "3px solid rgba(0, 0, 0, 0.15)",
  }

  const lightFont = {
    color: props.on ? "#918E9B" : "#2B283A" 
  }

  const darkFont = {
    color: props.on ? "#FFFFFF" : "#D5D4D8"
  }

  return (
    <header>
      <nav style={styles}>
        <img src={require("../images/React_logo_wordmark.png")} alt='react-logo' width={'150px'} />
        <div className='toggle'>
          <span style={lightFont} className='light'>Light</span>
          <label className="switch">
            <input type="checkbox" />
            <span onClick={props.handleClick}className="slider round"></span>
          </label>
          <span style={darkFont} className='dark'>Dark</span>
        </div>
      </nav>
    </header>
  )
}
