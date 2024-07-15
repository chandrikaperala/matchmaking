import React, {useState} from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import GameBoard from './components/GameBoard'
import SuccessScreen from './components/SuccessScreen'
import './App.css'

const App = () => {
  const [view, setView] = useState('welcome')
  const [finalScore, setFinalScore] = useState(0)
  const [timeTaken, setTimeTaken] = useState(0)

  const handleStart = () => {
    setView('game')
  }

  const handleGameEnd = (score, time) => {
    setFinalScore(score)
    setTimeTaken(time)
    setView('success')
  }

  return (
    <div className="App">
      {view === 'welcome' && <WelcomeScreen onStart={handleStart} />}
      {view === 'game' && <GameBoard onGameEnd={handleGameEnd} />}
      {view === 'success' && (
        <SuccessScreen score={finalScore} time={timeTaken} />
      )}
    </div>
  )
}

export default App
