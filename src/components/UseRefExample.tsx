import React, { useRef } from 'react'

export const UseRefExample = () => {

  const inputRef = useRef<HTMLInputElement >(null)

  return (
    <div className='flex flex-col gap-4'>
    
      <input
        type="text"
        placeholder='Escribe tu nombre aqui'
        ref={inputRef}
        className='p-4'
      />
      
      <button
        onClick={() => inputRef.current?.select()}
      >
        Set Focus
      </button>
    
    </div>
  )
}
