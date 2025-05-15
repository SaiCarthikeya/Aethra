import React from 'react'
import "./App.css" 

function Header() {
  return (
    <div>
      <header className='header'>
        <h1 className='title'>Basha Bandu</h1>
        <nav>
          <button className = "faq"
            onMouseOver={e => {
              e.target.style.background = '#4f8cff';
              e.target.style.color = '#fff';
            }}
            onMouseOut={e => {
              e.target.style.background = '#fff';
              e.target.style.color = '#4f8cff';
            }}
            onClick={() => window.location.href = '/faq'}
          >
            FAQ
          </button>
          <button className = "about"
            onMouseOver={e => {
              e.target.style.background = '#38e8ff';
              e.target.style.color = '#fff';
            }}
            onMouseOut={e => {
              e.target.style.background = '#fff';
              e.target.style.color = '#38e8ff';
            }}
            onClick={() => window.location.href = '/about'}
          >
            About
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header