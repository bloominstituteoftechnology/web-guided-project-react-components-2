import React from 'react'
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from './friend'

export default function FriendsList({ friends }) {

  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  // use destructuring to pull the friends array out of props, as a variable

  // const { friends } = props


  // js arrays, .map vs .forEach? --> .map builds a new array
  // [<Friend />, <Friend />, <Friend />, <Friend />]

  return (
    <div className='list-friends container'>
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}

      {friends.map(friendObj => <Friend key={friendObj.id} friend={friendObj} />)}

    </div>
  )
}
