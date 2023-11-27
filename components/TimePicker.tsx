import React from 'react'
import { useApp } from '@/context/AppContext';

export default function TimePicker () {

  const { service, pickTime } = useApp();

  const lunchTimes = [
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
  ]

  const dinnerTimes = [
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00',
    '22:30',
  ]

  const times = service === 'Lunch' ? lunchTimes : dinnerTimes

  return (
    <div className='flex flex-col gap-1'>
      {times.map((time, index) => (
        <button
          key={index}
          onClick={() => pickTime(time)} 
          className='bg-red-500 hover:bg-red-700 ease-in-out duration-300 text-white flex justify-center items-center w-full py-2 px-16 rounded-full font-normal text-lg'>
          {time}
        </button>
      ))}
    </div>
  )
}