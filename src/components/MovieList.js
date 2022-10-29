import { useAppContext } from '../context/AppContext';
import Loading from './Loading';
import MovieItem from './MovieItem';
export default function MovieList() {
  const { loading, data } = useAppContext();
  console.log(data);
  return (
    <div className='text-center'>
      {loading ? (
        <Loading />
      ) : (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {data.map((movie) => (
            <MovieItem movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
