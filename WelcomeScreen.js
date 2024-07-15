import React, {useState} from 'react'

const WelcomeScreen = ({onStart}) => {
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    localStorage.setItem('userName', name)
    onStart()
  }

  return (
    <div>
      <h1>Welcome to the Tile Matching Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Start Game</button>
      </form>
    </div>
  )
}

export default WelcomeScreen
