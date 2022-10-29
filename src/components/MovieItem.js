export default function MovieItem({ movie }) {
  const { Poster, Title, Type, Year } = movie;
  return (
    <div className='group relative max-w-[220px] cursor-pointer justify-self-center'>
      <div className='h-[300px] w-[220px] overflow-hidden shadow-md rounded-md mb-2'>
        <img
          className='transform group-hover:scale-110 transition object-center object-cover '
          src={Poster}
          alt={Title}
        />
      </div>
      <p className='font-semibold text-slate-700 dark:text-slate-100'>
        {Title}
      </p>
      <p className='text-xs font-semibold text-slate-400'>{Year}</p>
      <p className='absolute top-2 left-2 bg-slate-100 uppercase text-xs font-semibold p-1 rounded-sm opacity-90'>
        {Type}
      </p>
    </div>
  );
}
