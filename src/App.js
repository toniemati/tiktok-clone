import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './components/Video/Video';
import { getCollection } from './firebase';

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const snapshot = await getCollection('videos');
      setVideos(snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })));
    }
    getData();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.length ? (
            videos.map((video) => (
              <Video
              key={video.id}
              url={video.url}
              channel={video.channel}
              description={video.description}
              song={video.song}
              likes={video.likes}
              messages={video.messages}
              shares={video.shares}
              />
              ))
          ) : (
            <h2 style={{ color: 'white', textAlign: 'center' }}>no data available</h2>
          )
        }
      </div>
    </div>
  );
}

export default App;
