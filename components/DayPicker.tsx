"use client"
 
import * as React from "react"
 
import { Calendar } from "@/components/ui/calendar"
import { useStep } from "@/context/StepContext"
import { useState } from "react"

export default function DayPicker () {
  const [fecha, setFecha] = useState<Date | undefined>(new Date())
  const { pickDate } = useStep()

  return(
    <div className="flex flex-col items-center gap-3">
      <div>
        <h1 className="text-red-600 text-xl font-normal text-center">Select <span className="font-semibold">date</span>
</h1>
      </div>
      
      <Calendar
      mode="single"
      selected={fecha}
      onSelect={setFecha}
      className="rounded-md border shadow"
      />

      <div>
        <button 
        onClick={() => pickDate(fecha)}
        className="bg-red-500 hover:bg-red-700 ease-in-out duration-300 text-white flex justify-center items-center w-auto py-1 px-16 rounded-full font-semibold text-lg">
          Pick date
        </button>
      </div>
    </div>
  )
}