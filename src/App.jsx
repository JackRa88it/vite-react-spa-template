import { useState } from 'react'
import './App.css'

export default function App() {
  const [tab, setTab] = useState('home')

  let currentTab
  switch (tab) {
    case 'home':
      currentTab = <HomeTab />
      break;
    case 'about':
      currentTab = <AboutTab />
      break;
    case 'contact':
      currentTab = <ContactTab />
      break;
    default:
      currentTab = <HomeTab />
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
      <div className='logo' onClick={(e) => onTabClick('home')}>LOGO</div>
      <div className='tab' onClick={(e) => onTabClick('home')}>Home</div>
      <div className='tab' onClick={(e) => onTabClick('about')}>About</div>
      <div className='tab' onClick={(e) => onTabClick('contact')}>Contact</div>
    </nav>
  )
}

function HomeTab() {
  return (
    <div className='home-tab'>
      Home tab
    </div>
  )
}

function AboutTab() {
  return (
    <div className='about-tab'>
      About tab
    </div>
  )
}

function ContactTab() {
  return (
    <div className='contact-tab'>
      Contact tab
    </div>
  )
}