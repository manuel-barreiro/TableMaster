import { useApp } from '@/context/AppContext';

export default function PreferenceOfService() {
  const { pickService } = useApp();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center">
      <h1 className="text-red-600 text-xl font-normal">Preference of</h1>
      <h1 className="text-red-600 text-xl font-semibold">service</h1>
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          onClick={() => pickService('Lunch')} 
          className='bg-red-500 hover:bg-red-700 ease-in-out duration-300 text-white flex justify-center items-center w-full py-3 px-28 rounded-full font-normal text-xl'>
          Lunch
        </button>
        <button
          onClick={() => pickService('Dinner')} 
          className='bg-red-500 hover:bg-red-700 ease-in-out duration-300 text-white flex justify-center items-center w-full py-3 px-28 rounded-full font-normal text-xl'>
          Dinner
        </button>

      </div>
    </div>
    
  );
}