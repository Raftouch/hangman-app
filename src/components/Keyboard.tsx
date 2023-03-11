import React from 'react'

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
    "z"
]

export function Keyboard() {
  return (
    <div
        style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
            gap: '.5rem'
        }}
    >
      {keys.map(key => {
        return (
            <button className='border-4 border-black aspect-square text-4xl uppercase font-bold cursor-pointer hover:bg-cyan-400 active:bg-cyan-600 active:text-white disabled:opacity-25' key={key}>{key}</button>
        )
      })}
    </div>
  )
}
