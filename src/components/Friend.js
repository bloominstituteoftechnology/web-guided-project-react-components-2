import React from 'react'
import PetsList from './PetsList'

export default function Friend(props) {
  // 👉 1- What does a Friend need?
  const { friend, changeStatus } = props;
  return (
    <div className='friend-friends container'>
      {/* 👉 2- Fix the JSX so it displays real info coming into the component */}
      <div className='friend-info'>
        <div >
          <h3>Name: {friend.name}</h3>
          <p>Age: {friend.age}</p>

          <p>Married: {friend.married ? "Yes" : "No"} <button onClick={() => changeStatus(friend.id)}>change</button></p>
          <div>Likes:
            <ul>
              {/* 👉 3- Loop over the friend's hobbies and generate <li/> elements as you go */}
              {friend.hobbies.map((hobby, index) => <li key={index}>{hobby}</li> )}
            </ul>
          </div>
        </div>

        <div>
          {/* 👉 3- What data does the PetsList need? */}
          {/* What is the exact name of the prop/props it expects? */}
          {/* Is the data around here somewhere so I may pass it? */}
          <PetsList pets={friend.pets} />
        </div>
      </div>
    </div>
  )
}
