import React from 'react'

interface HangmanWordProps {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({guessedLetters, wordToGuess, reveal = false}: HangmanWordProps) {
  return (
    <div className='flex gap-5 font-bold uppercase text-6xl'>
      {wordToGuess.split('').map((letter, index) => (
        <span className='border-b-8 border-black' key={index}>
            <span 
                style={{
                    visibility: guessedLetters.includes(letter) || reveal
                    ? 'visible'
                    : 'hidden',
                    color: !guessedLetters.includes(letter) && reveal ? 'red' : 'black'
                }}
            > 
                {letter}
            </span>
        </span>
      ))}
    </div>
  )
}