import React from 'react'

export default function Pet(props) {
  const { pet } = props

  return (
    <div className='pet-friends container'>
      <h4>{pet.name} ({pet.type})</h4>
    </div>
  )
}
