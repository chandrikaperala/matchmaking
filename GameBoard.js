import React, {useState, useEffect} from 'react'
import Tile from '../Tile'
import Scoreboard from '../Scoreboard'
import Timer from '../Timer'
import './index.css'

const generateTiles = () => {
  const tileValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  return [...tileValues, ...tileValues]
}

const shuffleTiles = tiles => {
  const shuffled = [...tiles]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const GameBoard = ({onGameEnd}) => {
  const [tiles, setTiles] = useState(shuffleTiles(generateTiles()))
  const [flippedTiles, setFlippedTiles] = useState([])
  const [matchedTiles, setMatchedTiles] = useState([])
  const [score, setScore] = useState(0)
  const [startTime, setStartTime] = useState(Date.now())

  useEffect(() => {
    if (matchedTiles.length === tiles.length && tiles.length > 0) {
      onGameEnd(score, Date.now() - startTime)
    }
  }, [matchedTiles, tiles, score, startTime, onGameEnd])

  const handleTileClick = index => {
    if (
      flippedTiles.length < 2 &&
      !flippedTiles.includes(index) &&
      !matchedTiles.includes(index)
    ) {
      setFlippedTiles(prevFlippedTiles => [...prevFlippedTiles, index])
    }
  }

  useEffect(() => {
    if (flippedTiles.length === 2) {
      const [firstIndex, secondIndex] = flippedTiles
      if (tiles[firstIndex] === tiles[secondIndex]) {
        setMatchedTiles(prevMatchedTiles => [
          ...prevMatchedTiles,
          firstIndex,
          secondIndex,
        ])
        setScore(prevScore => prevScore + 1)
        setFlippedTiles([])
      } else {
        setTimeout(() => {
          setFlippedTiles([])
        }, 1000)
        setScore(prevScore => prevScore - 1)
      }
    }
  }, [flippedTiles, tiles, matchedTiles, setFlippedTiles, setMatchedTiles])

  return (
    <div>
      <div className="scoreboard">
        <Scoreboard score={score} />
        <Timer startTime={startTime} />
      </div>
      <div className="game-board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            value={tile}
            isFlipped={
              flippedTiles.includes(index) || matchedTiles.includes(index)
            }
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default GameBoard
