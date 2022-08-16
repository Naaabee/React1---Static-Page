import React from 'react'
import "../components/Main.css"
import background from "../images/reactjs-icon3.png"
import background2 from "../images/reactjs-icon2.png"

export default function Main(props) {

    const styles = {
        backgroundColor: props.on ? "#282D35" : "#FFFFFF",
        backgroundImage: props.on ? "url(" + background2 + ")" : "url(" + background + ")"
      }

    const subStyle = {
        color: props.on ? "#FFFFFF" : "#2B283A"
    }


    return (
        <main style={styles}>
            <h1 style={subStyle} className='main--title'>Fun facts about React</h1>
            <ul className='main--list'>
                <li style={subStyle}>Was first released in 2013</li>
                <li style={subStyle}>Was originally created by Jordan Walke</li>
                <li style={subStyle}>Has well over 100K stars on GitHub</li>
                <li style={subStyle}>Is maintained by Facebook</li>
                <li style={subStyle}>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}
