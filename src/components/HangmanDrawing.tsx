import React from 'react'

const head = (
    <div className='absolute top-[50px] right-[-20px] h-[50px] w-[50px] rounded-full border-black border-[10px]'/>
)

const body = (
    <div className='absolute top-[100px] right-0 h-[100px] w-[10px] bg-black'/>
)

const right_arm = (
    <div className='absolute top-[100px] right-[-100px] h-[10px] w-[100px] bg-black -rotate-45 -translate-x-5'/>
)

const left_arm = (
    <div className='absolute top-[100px] right-[-10px] h-[10px] w-[100px] bg-black rotate-45'/>
)

const right_leg = (
    <div className='absolute top-[225px] right-[-10px] h-[10px] w-[100px] bg-black -rotate-45'/>
)

const left_leg = (
    <div className='absolute top-[225px] right-[-15px] h-[10px] w-[100px] bg-black rotate-45 translate-x-16'/>
)

const body_parts = [head, body, right_arm, left_arm, right_leg, left_leg]

interface HangmanDrawingProps {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}: HangmanDrawingProps) {
  return (
    <div className='relative'>
       {body_parts.slice(0, numberOfGuesses)}
        <div className='absolute top-0 right-0 h-[50px] w-[10px] bg-black'/>
        <div className='h-[10px] w-[200px] bg-black ml-[120px]'/>
        <div className='h-[400px] w-[10px] bg-black ml-[120px]'/>
      <div className='h-[10px] w-[250px] bg-black'/>
    </div>
  )
}