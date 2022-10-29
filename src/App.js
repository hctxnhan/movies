import DarkModeSwitcher from './components/DarkModeSwitcher';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import { useThemeContext } from './context/ThemeContext';

export default function App() {
  const { isDark } = useThemeContext();
  return (
    <div className={`bg-slate-200 ${isDark && 'dark'}`}>
      <div className='p-10 min-h-screen w-full dark:bg-slate-800'>
        <div className='pb-10 flex justify-center'>
          <SearchBox />
          <DarkModeSwitcher />
        </div>
        <MovieList />
      </div>
    </div>
  );
}
