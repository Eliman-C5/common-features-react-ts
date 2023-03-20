import React, { useContext } from 'react'
import { LanguageContext } from '../../context/ContextProvider'

interface TranslateProps {
  spanish: string,
  english: string
}

export const TranslateBox = ({spanish, english}: TranslateProps) => {

  const {isSpanishActive} = useContext(LanguageContext)

  return (
    <p>{isSpanishActive? spanish : english}</p>
  )
}
