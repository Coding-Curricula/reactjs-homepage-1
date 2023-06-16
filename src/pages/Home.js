import React from 'react'

import './Home.css'

const features = [
  {
    title: 'Front End Development',
    description: 'HTMLS, CSS, JavaScript, React, Next.js, Gatsby.js, and more!'
  },
  {
    title: 'Back End Development',
    description: 'Node.js, Express.js, MongoDB, SQL, Python, Django, and more!'
  },
  {
    title: 'Mobile Development',
    description: 'React Native, Flutter, Swift, Kotlin, Java, and more!'
  }
]

const prices = [
  {
    title: 'Free',
    options: [
      'Monthly newsletter'
    ]
  },

  {
    title: 'Basic',
    options: [
      'Access to all videos',
      'Download videos',
      'Access to exclusive videos',
      'Weekly newsletter'
    ]
  },

  {
    title: 'Pro',
    options: [
      'Access to all videos',
      'Download videos',
      'Access to exclusive videos',
      'Daily newsletter',
      'Monthly live stream',
      'Exclusive API Access'
    ]
  }
]

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Coding Bootcamp with Friends</h1>
      <p>Learn to code by watching others</p>
      <button>Watch Now</button>
    </div>
  )
}

function Features() {
  return (
    <div className='features-container'>
      <h2>Features</h2>
      <p>Some features</p>
      <ul className='features-grid'>
        {features.map((feature, index) => (
          <li key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Pricing() {
  return (
    <div className='pricing-container'>
      <h1>Pricing</h1>
      <p>Some pricing</p>
      <ul>
        {prices.map((price, index) => (
          <li key={index}>
            <h3>{price.title}</h3>
            <ul>
              {price.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Home() {
  return (
    <div className='home-container'>
      <Hero />
      <Features />
      <Pricing />
    </div>
  )
}