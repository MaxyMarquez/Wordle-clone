import { useEffect, useState } from 'react'
import './App.css'
import Wordle from './components/Wordle/Wordle'
import words from './words.json'


function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    const word = Math.floor(Math.random() * words.length)
    setSolution(words[word]);

  }, [setSolution])

  return (
    <>
      <Wordle solution={solution} />
    </>
  )
}

export default App
