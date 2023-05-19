import { slice } from "lodash";
import React from "react";

import data from "../data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [playList, setPlayList] = React.useState([]);
  const [songs, setSongs] = React.useState(data);
  const [startIndex, setStartIndex] = React.useState(0);
  const [endIndex, setEndIndex] = React.useState(5);
  const [trendingSong, setTrendingSong] = React.useState([...songs]
  
  );

 // view more trending songs
  const viewMore = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 5);
 
    if (endIndex >= trendingSong.length) {
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
