import { useApp } from '@/context/AppContext';
import { Progress } from '@/components/ui/progress';
import { IoArrowBack } from "react-icons/io5";

export default function ProgressBar () {
  const { step, setStep } = useApp();

  return (
    <div className="flex flex-col gap-3 w-[80%] md:w-[40%]">

      <Progress value={step/6*100} className='w-full'/>

      <button onClick={() => setStep((prev: number) => prev - 1)}>
        <IoArrowBack className='text-white w-6 h-6' />
      </button>
    </div>
  )
}