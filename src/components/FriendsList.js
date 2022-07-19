import React from 'react'
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from "./Friend";

export default function FriendsList(props) {
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  const { friends, changeStatus } = props;
  // const friends = props.friends;
  // const changeStatus = props.changeStatus;

  return (
    <div className='list-friends container'>
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}
      { friends.map(friend => {
        return <Friend friend={friend} key={friend.id} changeStatus={changeStatus} />
      })}
    </div>
  )
}

// NO IF STATEMENTS!
// NO FOR LOOPS