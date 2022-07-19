// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'
// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)
import friendsData, { hello } from "../dummy-data/friends";

export default function App() {
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friends, setFriends] = useState(friendsData);

  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchBox, setSearchBox] = useState("");

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa
  const changeStatus = (id) => {
    // loop over the friends array
    // if the user id at index i === id
    // update the marital status
    // else do nothing ie return the original friend
    /**
     * const updateFriends = [];
     * for (let i = 0; i < friends.length; i++) {
     * 
     * }
     */
    const updatedFriends = friends.map(friend => {
      if (friend.id === id) {
        return { ...friend, married: !friend.married };
      } else {
        return friend;
      }
    })
    setFriends(updatedFriends);
  }

  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)
  const filterFriends = () => {
    // First things first...remove all beginning / ending white space from search term
    // convert search term to all lower case
    const normalizedTerm = searchBox.trim().toLowerCase();
    if (!normalizedTerm) return friends;
    const updatedFriends = friends.filter(friend => {
      return friend.name.toLowerCase().includes(normalizedTerm);
    })
    return updatedFriends;
  }

  // what is a string in JS???? "Casey" => ["C", "a", "s", "e", "y"]

  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search setSearchBox={setSearchBox} />
      {/* 👉 7- Render the FriendsList component */}
      {/* What prop/props does FriendsList need? */}
      <FriendsList friends={filterFriends()} changeStatus={changeStatus} />
    </div>
  )
}

/**
 * const props = {
 *   friends: friends,
 *   changeStatus: changeStatus
 * }
 * FriendsList(props)
 */

/**
 * What are props??? => data passed from parent to child
 * What is state???? => data that lives in the component
 * What method(s) do we use to loop in JSX??? => map / filter / reduce / forEach / find
 * What is JSX?????? => JavaScript Markup Language
 * What is a React Component? => function!
 * What does useState return? => array with two values:
 *     the first is the state variable, the second the way to update said state variable
 * What is a String in JS???? => Array of characters
 * 1 == "1" ??? true
 * 1 === "1" ?? false
 */