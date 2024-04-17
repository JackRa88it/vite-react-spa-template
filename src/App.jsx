import { useState } from 'react'
import './App.css'

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <>
      <Navbar 
        tab={tab}
        onTabClick={setTab}
      />
      <HomeTab />
    </>
  )
}

function Navbar({ tab, onTabClick }) {
  return (
    <div className='navbar'>
      Navbar
    </div>
  )
}

function HomeTab() {
  return (
    <div className='home-tab'>
      Home tab
    </div>
  )
}
