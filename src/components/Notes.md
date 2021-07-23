- react
- react-dom
- parcel-bundler, Babel, Webpack
- Can you use React JSX in any JS file?
-- No!
-- React has to be transpiled (translated/compiled)


Common pattern in React:
- parent component has these jobs:
-- fetch data
-- transform data (like loop over it and get rid of unnecessary data)
-- arrange the children
-- pass data to the children

- child component has these jobs:
-- use the data to make UI
-- use the UI to change the data back in the parent



-- Stored state in the parent (like App)
-- Passed it into the child container (like FriendsList)
-- Made child components by mapping over data (friends.map --> childComponent)
-- Passed down a function so child could update state in the parent
