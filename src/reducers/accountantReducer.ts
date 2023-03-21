import React from 'react'

type Action = 
{type: 'increment', payload: number} | 
{type: 'decrement', payload: number} | 
{type: 'reset'} 

//An easy way to do a reducer + TS is the 'typeof' way
export const INITIAL_STATE = {count: 0}

export const accountantReducer = (state: typeof INITIAL_STATE, action: Action) => {
  
  switch (action.type) {
  
    case 'increment':
      
      return {count: state.count + action.payload}
      
    case 'decrement':
    
      return {count: state.count - action.payload}
      
    case 'reset': 
    
      return INITIAL_STATE
  
    default:
      
      return state
  }
  
}
