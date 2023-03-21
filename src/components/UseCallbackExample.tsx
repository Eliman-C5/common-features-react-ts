import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './Atoms/ShowIncrement'

export const UseCallbackExample = () => {

  const [counter, setCounter] = useState(1)
  
  const incrementFather = useCallback(
    (param: number) => {
      //console.log('Otra vez')
      setCounter((value) => value + param);
    },
    [],
  )

  return (
    <div>
    
      <h4>We pass a function as a prop and invoked {counter} </h4>
      
      <ShowIncrement increment={incrementFather} />
      
    </div>
  )
}
