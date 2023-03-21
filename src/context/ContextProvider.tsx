import React, { createContext, useState } from 'react'
import { PropChildren, TranslateMode } from '../interfaces/app_interfaces';

//1.- We call createContext in a file inside context folder
export const LanguageContext = createContext<TranslateMode>({} as TranslateMode);

export const ContextProvider = ({children}: PropChildren) => {

  const [isSpanishActive, setIsSpanishActive] = useState<boolean>(false)
  
  //2.- We return a wrapper component that we'll pass the values that we put in the prop 'value'
  return (
    <LanguageContext.Provider value={{
      isSpanishActive,
      setIsSpanishActive,
    }}>
      {children}
    </LanguageContext.Provider>
  )
}