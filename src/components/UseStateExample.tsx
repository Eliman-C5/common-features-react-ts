import React, { useState } from 'react'
import { CodeBox } from './Atoms/CodeBox';

export const UseStateExample = () => {

  const [count, setCount] = useState<number>(1);

  return (
    <>
    
      <p className='text-left'>useState is a hook...</p>
      
      <CodeBox>
        <span className='text-blue-300'>const </span>
        <span>[count,setCount] = </span>
        <span><span className='text-yellow-200'>useState</span><span className='text-green-300'>{'<number>'}</span>(1);</span>
      </CodeBox>
      
      <p className='text-left'>Once...</p>
      
      <CodeBox>
        <span className='block'>{'<button onClick={() => setCount((count) => count + 1)}>'}</span>
        <span className='block pl-4'>count is</span>
        <span className='block'>{'</button>'}</span>
      </CodeBox>
      
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
