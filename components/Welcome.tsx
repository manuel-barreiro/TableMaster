import { useApp } from '@/context/AppContext';

export default function Welcome() {

  const { setStep } = useApp();

  return (
    <div>
      <h1 className='text-xl font-semibold text-red-600 text-center mb-10'>Welcome</h1>
      <button onClick={() => setStep(1)} className='bg-red-600 hover:bg-red-700 ease-in-out duration-300 text-white text-center px-32 md:px-36 py-3 rounded-3xl font-semibold text-sm'>Book a table</button>
    </div>
  )
}