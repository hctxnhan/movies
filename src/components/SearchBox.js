import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBox() {
  const { setQuery } = useAppContext();
  const [name, setName] = useState('');
  return (
    <div className='flex w-[500px] shadow-md items-center rounded-md py-3 px-4 gap-2 bg-white dark:shadow-white'>
      <div className=''>
        <AiOutlineSearch color='rgb(203 213 225)' size={'35px'} />
      </div>
      <input
        className='w-full text-2xl text-slate-800 focus:outline-none'
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />

      <button
        className='uppercase font-semibold text-slate-300 hover:text-slate-800'
        onClick={() => setQuery(name)}
      >
        Search
      </button>
    </div>
  );
}
