import { useThemeContext } from '../context/ThemeContext';
import { MdOutlineLightMode } from 'react-icons/md';
export default function DarkModeSwitcher() {
  const { isDark, setDark } = useThemeContext();
  console.log(isDark);
  return (
    <button
      className='absolute right-10 top-10'
      onClick={() => setDark(!isDark)}
    >
      <MdOutlineLightMode size='1.8rem' color={isDark ? 'white' : 'black'} />
    </button>
  );
}
