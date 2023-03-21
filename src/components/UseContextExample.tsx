import React, { useContext } from 'react'
import { LanguageContext } from '../context/ContextProvider'
import { TranslateMode } from '../interfaces/app_interfaces'
import { TranslateBox } from './Atoms/TranslateBox'

export const UseContextExample = () => {
  
  const {setIsSpanishActive, isSpanishActive} = useContext<TranslateMode>(LanguageContext)

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
