'use client'

import { createContext, useContext, useState } from 'react'

type StepProviderProps = {
  children: React.ReactNode
}

type StepContext = {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const StepContext = createContext({} as StepContext)

export function useStep (): any {
  return useContext(StepContext)
}

export function StepProvider ({ children }: StepProviderProps): JSX.Element {

  const [step, setStep] = useState(0);
  
  return (
    <StepContext.Provider value={{ setStep, step }}>
      {children}
    </StepContext.Provider>
  )
}