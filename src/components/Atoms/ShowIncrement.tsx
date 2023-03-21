import React from 'react'

type Prop = {
  increment: (param: number) => void
}

export const ShowIncrement = React.memo<({ increment }: Prop) => JSX.Element>
(  ({increment}: Prop) => {

  console.log('Me volvi a generar')

  return (
    <button
      className='mt-5'
      onClick={() => increment(1)}
    >
      Increment
    </button>
  )
})
