import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  // 1- What does a Friend need?

  return (
    <div className='friend-friends container'>
      {/* 2- Fix the JSX so it displays real info coming into the component */}
      <h2>Jessica</h2>

      <div className='friend-info'>
        <div >
          <p>Age: 26</p>

          <p>Married: yes</p>
          <div>Likes:
            <ul>
              {/* 3- Loop over the friend's hobbies and generate <li/> elements as you go */}
            </ul>
          </div>
        </div>

        <div>
          {/* 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
          <PetsList />
        </div>
      </div>
    </div>
  )
}
