'use client'

import { createContext, use, useContext, useEffect, useState } from 'react'

type StepProviderProps = {
  children: React.ReactNode
}

type StepContext = {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
  partySize: number
  pickPartySize: (size: number) => void
}

const StepContext = createContext({} as StepContext)

export function useStep (): any {
  return useContext(StepContext)
}

export function StepProvider ({ children }: StepProviderProps): JSX.Element {

  const [step, setStep] = useState(0);
  const [partySize, setPartySize] = useState(0);

  useEffect(() => {console.log(partySize)}, [partySize])

  function pickPartySize(size: number) {
    setPartySize(size)
    setStep(2)
  }
  
  return (
    <StepContext.Provider value={{ setStep, step, pickPartySize, partySize  }}>
      {children}
    </StepContext.Provider>
  )
}