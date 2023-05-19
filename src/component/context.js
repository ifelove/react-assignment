import { slice } from "lodash";
import React from "react";

import data from "../data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [playList, setPlayList] = React.useState([]);
  const [songs, setSongs] = React.useState(data);
  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(5);
  const [isNoMoreTrendingSong, setIsNoMoreTrendingSong] = React.useState(true);
  //const trendingSong=slice(songs,startIndex,endIndex)
  const [trendingSong, setTrendingSong] = React.useState([...songs]
    //slice(songs, startIndex, endIndex)
  );

  //const trendingSong=[...songs].slice(0,index)
  const viewMore = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 5);
    // console.log(index);
    if (endIndex >= trendingSong.length) {
      setIsNoMoreTrendingSong(true);
      setStartIndex(0);
      setEndIndex(5);
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
        viewMore,
        playList,
        setPlayList,
        setTrendingSong,
        startIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext = () => {
  return React.useContext(AppContext);
};
