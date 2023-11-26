'use client'

import { createContext, use, useContext, useEffect, useState } from 'react'

type StepProviderProps = {
  children: React.ReactNode
}

type StepContext = {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
  partySize: number
  setPartySize: React.Dispatch<React.SetStateAction<number>>
  increasePartySize: () => void
  decreasePartySize: () => void
}

const StepContext = createContext({} as StepContext)

export function useStep (): any {
  return useContext(StepContext)
}

export function StepProvider ({ children }: StepProviderProps): JSX.Element {

  const [step, setStep] = useState(0);
  const [partySize, setPartySize] = useState(5);

  useEffect(() => {console.log(partySize)}, [partySize])

  function increasePartySize() {
    setPartySize(prev => prev + 1)
  }

  function decreasePartySize() {
    setPartySize(prev => prev - 1)
  }
  
  return (
    <StepContext.Provider value={{ setStep, step, setPartySize, partySize, increasePartySize, decreasePartySize }}>
      {children}
    </StepContext.Provider>
  )
}