import React from 'react'
import {songs} from '../data'
import {AiOutlinePlus} from 'react-icons/ai'

export default function TrendingSongCard() {
  return (
    <div className='trending-song'>
      <h2>Trending Songs</h2>
      <section>
        {songs.map((song) => {
          const {id,title,artist}=song
          return (
            <main key={id} className="song-list">
              <div>
                {title} by {artist}
              </div>
              <span className='icon'>
                <AiOutlinePlus />
              </span>
            </main>
          );
        })}
      </section>
      <button className='btn'>View More</button>
    </div>
  );
}
