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
  date: Date | undefined
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>
  pickDate: (date: Date) => void
}

const StepContext = createContext({} as StepContext)

export function useStep (): any {
  return useContext(StepContext)
}

export function StepProvider ({ children }: StepProviderProps): JSX.Element {

  const [step, setStep] = useState(0);
  const [partySize, setPartySize] = useState(0);
  const [date, setDate] = useState<Date | undefined>(new Date())

  useEffect(() => {console.log(date)}, [date])

  function pickPartySize(size: number) {
    setPartySize(size)
    setStep(2)
  }

  function pickDate(date: Date) {
    setDate(date)
    setStep(3)
  }
  
  return (
    <StepContext.Provider value={{ setStep, step, pickPartySize, partySize, date, setDate, pickDate  }}>
      {children}
    </StepContext.Provider>
  )
}