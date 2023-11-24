import Image from 'next/image'
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className='flex justify-center'>
      <div className="bg-white w-full md:w-[50%] flex flex-col justify-center items-center p-6 rounded-b-3xl">

        <div className='w-full flex justify-between items-center mb-6'>
          <span className='text-red-600'>EN</span>
          <Image width={55} height={55} src={'/ninoGordo.png'} alt={'ninoGordo'}></Image>
          <FaUser className='text-red-600' />
        </div>

        <div>
          <h1 className='text-xl font-semibold text-red-600 text-center mb-10'>Welcome</h1>
          <button className='bg-red-600 hover:bg-red-700 ease-in-out duration-300 text-white text-center px-32 md:px-36 py-3 rounded-3xl font-semibold text-sm'>Book a table</button>
        </div>


      </div>
    </main>
  )
}
