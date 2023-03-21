import { ReactNode } from 'react';

export interface PropChildren {
  children: ReactNode
}

export interface TranslateMode { 
  isSpanishActive: boolean; 
  setIsSpanishActive: React.Dispatch<React.SetStateAction<boolean>>
}