import { useState } from 'react'
import './App.css'

export default function App() {
  const [tab, setTab] = useState('home')

  let currentTab
  switch (tab) {
    case 'home':
      currentTab = <Home />
      break;
    case 'about':
      currentTab = <About />
      break;
    case 'contact':
      currentTab = <Contact />
      break;
    default:
      currentTab = <Home />
  }

  return (
    <>
      <Navbar 
        tab={tab}
        onTabClick={setTab}
      />
      {currentTab}
    </>
  )
}

function Navbar({ tab, onTabClick }) {
  return (
    <nav className='navbar'>
      <div
        className='logo'
        onClick={(e) => onTabClick('home')}
      >
        LOGO
      </div>
      <div
        className={`tab${tab === 'home' ? ' active' : ''}`}
        onClick={(e) => onTabClick('home')}
      >
        Home
      </div>
      <div
        className={`tab${tab === 'about' ? ' active' : ''}`}
        onClick={(e) => onTabClick('about')}
      >
        About
      </div>
      <div
        className={`tab${tab === 'contact' ? ' active' : ''}`}
        onClick={(e) => onTabClick('contact')}
      >
        Contact
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className='home'>
      Home tab
    </div>
  )
}

function About() {
  return (
    <div className='about'>
      About tab
    </div>
  )
}

function Contact() {
  return (
    <div className='contact'>
      Contact tab
    </div>
  )
}