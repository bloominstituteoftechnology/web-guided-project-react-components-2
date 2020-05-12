import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  const { friend } = props

  return (
    <div className='friend-friends container'>
      <h2>{friend.name}</h2>

      <div className='friend-info'>
        <div >
          <p>Age: {friend.age}</p>

          {/* 1- Display something better in the Married area */}
          <p>Married: {friend.married}</p>
          <div>Likes:
            <ul>
              {/* 2- Loop over the friend's likes and generate <li/> elements as you go */}
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
