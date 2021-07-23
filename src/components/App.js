// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the useState hook!
import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)

// we use mock data all the time, so you can build a front-end component without an API
// axios.get('https://mycompany.com/friends')
import friendsMockData from '../dummy-data/friends'

export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  // how to use useState()??
  // what does the function useState() return? --> 
  // an array, with a value, and a function to change the value

  // why use useState and the setFriends function??
  const [friends, setFriends] = useState(friendsMockData)

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [search, setSearch] = useState('')

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  function changeStatus(id) {
    const newFriends = friends.map(friend => {
      if (friend.id === id) {
        friend.married = !friend.married
      }
      return friend
    })
    setFriends(newFriends)
  }


  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search search={search} setSearch={setSearch} />


      {/* 👉 7- Render the FriendsList component */}
      {/*  'render' here just means to invoke the component  */}
      {/* sometimes components need data BEFORE you can render them  */}
      {/* What prop/props does FriendsList need? */}
      <FriendsList friends={friends} updateFunction={changeStatus} />

    </div>
  )
}
