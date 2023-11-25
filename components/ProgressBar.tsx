import { useStep } from '@/context/StepContext';
import { Progress } from '@/components/ui/progress';
import { IoArrowBack } from "react-icons/io5";

export default function ProgressBar () {
  const { setStep } = useStep();

  return (
    <div className="flex flex-col gap-3 w-[80%] md:w-[40%]">

      <Progress value={35} className='w-full'/>

      <button onClick={() => setStep(0)}>
        <IoArrowBack className='text-white w-6 h-6' />
      </button>
    </div>
  )
}