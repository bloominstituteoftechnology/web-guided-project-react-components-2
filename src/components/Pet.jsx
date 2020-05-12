import React, { useState } from 'react'

export default function Pet(props) {
  const { pet } = props
  const [fav, setFav] = useState(false)

  // 1- Add a click handler to the button that favs the pet

  return (
    <div className='pet-friends container'>
      <h4>{pet.name} ({pet.type})</h4>
      {fav ? '❤️' : <button>fav</button>}
    </div>
  )
}
