import React from 'react'

const SuccessScreen = ({score, time}) => (
  <div>
    <h1>Congratulations!</h1>
    <p>Your Score: {score}</p>
    <p>Time Taken: {Math.floor(time / 1000)} seconds</p>
  </div>
)

export default SuccessScreen
