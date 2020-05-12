import { v4 as uuid } from 'uuid'

export const hello = 'world'

export default [
  {
    id: uuid(),
    name: 'Marta',
    age: 23,
    likes: [
      'hiking',
      'netflix',
      'death metal',
      'coding',
    ],
    married: true,
    pets: [
      { id: uuid(), name: 'Fido', type: 'Maltese' },
      { id: uuid(), name: 'Goldie', type: 'Goldfish' },
    ]
  },
  {
    id: uuid(),
    name: 'Jonathan',
    age: 27,
    likes: [
      'fishing',
      'sightseeing',
      'heavy metal',
      'coding',
    ],
    married: false,
    pets: [
      { id: uuid(), name: 'Venus', type: 'Venus fly trap' },
      { id: uuid(), name: 'Wolfie', type: 'German Sheppard' },
    ]
  },
  {
    id: uuid(),
    name: 'Wei',
    age: 21,
    likes: [
      'exotic animals',
      'bird watching',
      'hiking',
      'coding',
    ],
    married: true,
    pets: [
      { id: uuid(), name: 'Tony', type: 'Tiger' },
      { id: uuid(), name: 'Sharkie', type: 'Great White Shark' },
    ]
  },
]
