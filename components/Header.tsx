import Image from 'next/image'
import { FaUser } from "react-icons/fa";
import { useStep } from '@/context/StepContext';
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { format } from 'date-fns'



export default function Header() { 
  const { step, partySize, date } = useStep();
  return(
    <div className='flex flex-col w-full mb-6'>
      <div className='w-full flex justify-between items-center mb-3'>
        <span className='text-red-600'>EN</span>
        <Image width={55} height={55} src={'/ninoGordo.png'} alt={'ninoGordo'} priority></Image>
        <FaUser className='text-red-600' />
      </div>

      {step != 0 &&
        <div className='h-10 flex justify-center items-center gap-3'>
          {step >= 2 && partySize === 1 && <Badge>{partySize} PERSON</Badge>}
          {step >= 2 && partySize > 1 && <Badge>{partySize} PEOPLE</Badge>}
          {step >= 3  && <Badge>{format(date, 'EEE d, MMM').toUpperCase()}</Badge>}
        </div>
      }

      {step != 0 && <Separator />}
    </div>
    
  )  
}