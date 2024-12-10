import React from 'react'
// assets
import logo from '../../assets/3dgifmaker18317.gif'
import house1 from '../../assets/ja sfx 8.JPEG'

const Home = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          R Y A N <span className='sup'>&reg;</span> A D
        </h1>
        <img src={house1} className='App-logo' alt='logo' />
        <a
          className='App-link'
          href='https://.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          [ p h o t o s & s h i t ]
        </a>
      </header>
      <main>
        <h2>Other stuff</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          qui excepturi commodi asperiores exercitationem praesentium voluptate
          a, quam, explicabo dolores culpa modi minus nesciunt sint
          reprehenderit blanditiis ab aliquid amet.
        </p>
        <img src={logo} className='App-logo' alt='logo' />
      </main>
    </div>
  )
}

export default Home
