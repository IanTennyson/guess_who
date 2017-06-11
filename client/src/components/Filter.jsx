import React from 'react'

const Filter = (props) => {
  return (
  <div className="all-filters">
    <div className="spirit-filter">
      <p>Is the Spitit a: </p>
      <select onChange={props.onSpiritSelected}>
      <option defaultValue>Select your option</option>
        <option value="Rum">Rum</option>
        <option value="Whiskey">Whiskey</option>
      </select>
    </div>
    <p className="spirit-clue">{props.clue}</p>
  </div>
  )
}

export default Filter







// (
//   <div className="guess-div">
//     <p>Get a Clue!</p>
//     <select className="filter-select">
      
//     </select>
//   </div>
// )