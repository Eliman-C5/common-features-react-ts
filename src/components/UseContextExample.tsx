import React, { useContext } from 'react'
import { ContextProvider, LanguageContext } from '../context/ContextProvider'
import { TranslateBox } from './Atoms/TranslateBox'

export const UseContextExample = () => {
  
  const {setIsSpanishActive, isSpanishActive} = useContext(LanguageContext)

  return (
    <>
      
      <button 
        onClick={() => {
          setIsSpanishActive(!isSpanishActive)
        }}
        className=''
      >
        Translate
      </button>

      <TranslateBox spanish='Ahora en español' english='Now in english' />
    </>
  )
}
