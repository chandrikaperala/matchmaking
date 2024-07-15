import React from 'react'
import './index.css'

const Tile = ({value, isFlipped, onClick}) => (
  <div
    className={`tile ${isFlipped ? 'flipped' : ''}`}
    onClick={onClick}
    role="button" // Adding role="button" to make it accessible
    tabIndex="0" // Adding tabIndex="0" for keyboard accessibility
  >
    {isFlipped ? value : 'X'}
  </div>
)

export default Tile
