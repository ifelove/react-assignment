import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GlobalContext } from "./context";
import { slice } from "lodash";

export const TrendingSongCard = () => {
  const {
    trendingSong,
    viewMore,
    playList,
    setPlayList,
    startIndex,
    endIndex,

  } = GlobalContext();
  //adding song to the playlist
  const addToPlaylist = (item) => {
    console.log(item);

    setPlayList([...playList, item]);
  
  };
/**
  React.useEffect(() => {
    console.log(playList);
  }, [playList]);
 */
  return (
    <div className="trending-song">
      <h2 className="heading">Trending Songs</h2>
      <section>
        {slice(trendingSong, startIndex, endIndex).map((song) => {
          const { id, title, artist } = song;
          return (
            <main key={id} className="song-list">
              <div className="song">
                <span className="song-title"> {title} </span>
                by <span className="song-artist">{artist}</span>
              </div>
              <span className="icon" onClick={() => addToPlaylist(song)}>
                <AiOutlinePlus />
              </span>
            </main>
          );
        })}
      </section>
      <button
        className="btn"
        onClick={viewMore}
      >
        View more
      </button>
    </div>
  );
};
