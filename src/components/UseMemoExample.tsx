import React, { useMemo, useState } from 'react'

//Heavy process
const heavyStuff = (iterationNumber: number) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Ahi vamos...')
  }
  
  return `${iterationNumber} iterations done`
}

export const UseMemoExample = () => {

  const [counter, setCounter] = useState<number>(2000);
  const [show, setShow] = useState<boolean>(true);
  
  //useMemo to memorize this process
  const memorizedValue = useMemo<string>(() => heavyStuff(counter), [counter]);

  return (
    <div>
    
      <h1 className='mb-5'>Counter: {counter}</h1>
      
      <hr />
      
      <h4 className='my-5'>{memorizedValue}</h4>
      
      <div className="flex gap-4 justify-center">
      
        <button
          onClick={() => setCounter(counter + 1)}
        >
          +1
        </button>
      
        {/* Now when we select this button, it won't make the other component re-render */}
        <button
          onClick={() => setShow(!show)}
        >
          Show/Hide {JSON.stringify(show)}
        </button>

      </div>
      
      <p className='mt-5 font-semibold'>PLEASE DO INSPECT AND GO TO CONSOLE!!!</p>
    
    </div>
  )
}
