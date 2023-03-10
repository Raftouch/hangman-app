import { useState } from "react"
import words from "./wordList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    <div className="max-w-[800px] flex flex-col gap-2 m-auto">
      <div className="text-center">
        Lose
        Win
      </div>
    </div>
  )
}

export default App