import React from 'react'
import lawn1 from '../images/lawn1.png'
import Lawn5 from '../images/Lawn5.png'
import lawn8 from '../images/lawn8.jpg'
export function Home() {
  return (
    <>
      <main>
        <h1>Union Park Lawn</h1>
        <h2>Established in Wilmington, Delaware in 2008</h2>
        <h3>Top Rated Lawn Care & Landscaping Services</h3>
        <p>
          Property owners around here like service done right, on time without
          any hiccups. That's our model: simple, practical, timely service for
          every job.
        </p>
        <p>
          To begin a new service today or to request a quote for future work,
          contact our President, Pat, at 302-757-5496. Many of our customers
          prefer to communicate through text messaging. If that's you, text Pat
          for a free, quick Q&A with a knowledgeable professional.
        </p>

        <h3>Services Available</h3>
        <ul>
          <li>Tree Removal</li>
          <li>Lawn Care</li>
          <li>Landscaping</li>
          <li>Hardscaping</li>
          <li>Snow Cleaning</li>
          <li>Aeration</li>
          <li>Power Washing</li>
          <li>Gutter cleaning</li>
        </ul>
        <h2>Our Work</h2>
        <ul>
          <li>
            <img src={lawn1} alt="" />
          </li>
          <li>
            <img src={Lawn5} alt="" />
          </li>
          <li>
            <img src={lawn8} alt="" />
          </li>
        </ul>
      </main>
    </>
  )
}
