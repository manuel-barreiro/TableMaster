'use client'

import Welcome from '@/components/Welcome';
import PartySize from '@/components/PartySize';
import { useStep } from '@/context/StepContext';
import Header from '@/components/Header';
import ProgressBar from '@/components/ProgressBar';


export default function Home() {

  const { step } = useStep();

  return (
    <main className='flex flex-col items-center'>
      <div className="bg-white w-full md:w-[50%] flex flex-col justify-center items-center p-6 rounded-b-3xl mb-8">
        <Header />
        {step === 0 && <Welcome />}
        {step === 1 && <PartySize />}
      </div>
      {step != 0 && <ProgressBar />}
    </main>
      
  )
}
