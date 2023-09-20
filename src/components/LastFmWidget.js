import React, { useEffect, useState } from 'react';

const LastFmWidget = ({ apiKey, userName }) => {
  const [latestTrack, setLatestTrack] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${userName}&api_key=${apiKey}&format=json`);
        const data = await response.json();
        setLatestTrack(data.recenttracks.track[0]);  // Get the most recent track
      } catch (error) {
        console.error('Error fetching Last.fm data:', error);
      }
    };

    fetchData();
  }, [apiKey, userName]);

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', maxWidth: '300px', borderRadius: '5px' }}>
      <h2>Now Playing</h2>
      {latestTrack ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '10px' }} src={latestTrack.image[2]['#text']} alt="Album cover" />
          <div style={{ flexGrow: 1 }}>
            <div><strong>Title:</strong> {latestTrack.name}</div>
            <div><strong>Artist:</strong> {latestTrack.artist['#text']}</div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LastFmWidget;
