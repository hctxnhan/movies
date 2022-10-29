import { createContext, useContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [loading, error, data] = useFetch(`${API_ENDPOINT}&s=${query}`);

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        data,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
