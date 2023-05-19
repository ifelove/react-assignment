import React from "react";
import { slice } from "lodash";
import data from '../data'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [songs, setSongs] = React.useState(data);
  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(5);
  const [isNoMoreTrendingSong, setIsNoMoreTrendingSong] = React.useState(false);
  const trendingSong=slice(songs,startIndex,endIndex)
  //const trendingSong=[...songs].slice(0,index)
   const viewMore = () => {
    setStartIndex(endIndex)
     setEndIndex(endIndex + 5);
    // console.log(index);
     if (endIndex >= songs.length) {
       setIsNoMoreTrendingSong(true);
     } else {
       setIsNoMoreTrendingSong(false);
     }
   };
  return (
    <AppContext.Provider
      value={{
        songs,
        setSongs,
        endIndex,
        setEndIndex,
        isNoMoreTrendingSong,
        setIsNoMoreTrendingSong,
        trendingSong,
        viewMore
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext=()=>{
return React.useContext(AppContext)
}