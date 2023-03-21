import React, { useReducer } from 'react'
import { accountantReducer, INITIAL_STATE } from '../reducers/accountantReducer'

export const UseReducerExample = () => {

  const [state, dispatch] = useReducer( accountantReducer , INITIAL_STATE)

  return (
    <div>
      <p>Count: {state.count}</p>
      
      <div className="flex gap-4 justify-center mt-4">
      
        <button
          onClick={() => dispatch({type: 'increment', payload: 1})}
        >
          1+
        </button>
        
        <button
          onClick={() => dispatch({type: 'decrement', payload: 1})}
        >
          1-
        </button>
        
        <button
          onClick={() => dispatch({type: 'reset'})}
        >
          Reset
        </button>
      
      </div>
      
    </div>
  )
}
