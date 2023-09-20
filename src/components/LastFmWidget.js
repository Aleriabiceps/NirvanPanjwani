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
    <div style={{ 
    
      maxWidth: '800px', 
     
 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Added a subtle shadow
    }}>
      <h2 style={{ 
        fontSize: '22px', // Increased font size for the heading
        marginBottom: '2px', // Added spacing below the heading
        color: 'yellow', // Changed text color
      }}>Now Playing</h2>
      {latestTrack ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img style={{ 
            width: '100px', 
            height: '60px', 
            objectFit: 'cover', 
            marginRight: '10px', 
            borderRadius: '5px', // Rounded corners for the image
          }} src={latestTrack.image[2]['#text']} alt="Album cover" />
        <div style={{ flexGrow: 1 }}>
  <div><strong style={{ color: 'red' }}>Title:</strong> <span style={{ color: 'white' }}>{latestTrack.name}</span></div>
  <div><strong style={{ color: 'red' }}>Artist:</strong> <span style={{ color: 'white' }}>{latestTrack.artist['#text']}</span></div>
</div>

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    
  );
};

export default LastFmWidget;
