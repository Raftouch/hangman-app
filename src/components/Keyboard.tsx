import React from 'react'
import styles from './Keyboard.module.css'

const keys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "à",
    "â",
    "æ",
    "ç",
    "é", 
    "è",
    "ê",
    "ë",
    "î",
    "ï",
    "ô",
    "œ",
    "ù",
    "û",
    "ü",
    "ÿ"
]

interface KeyboardProps {
    activeLetters: string[]
    inactiveLetters: string[]
    disabled?: boolean
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({activeLetters, inactiveLetters, disabled = false, addGuessedLetter}: KeyboardProps) {
  return (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
            gap: '.5rem'
        }}
    >
      {keys.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)

        return (
            <button 
                className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`}
                key={key}
                onClick={() => addGuessedLetter(key)}
                disabled={isInactive || isActive || disabled}
            >{key}</button>
        )
      })}
    </div>
  )
}