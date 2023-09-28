import React, { useEffect, useState } from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import YouTubeSearch from 'youtube-search-api';

const LastFmWidget = ({ apiKey, userName }) => {
  const [latestTrack, setLatestTrack] = useState(null);
  const [timeAgo, setTimeAgo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${userName}&api_key=${apiKey}&format=json`);
        const data = await response.json();
        setLatestTrack(data.recenttracks.track[0]);  // Get the most recent track

        // Calculate the time ago
        const playedTimestamp = parseInt(data.recenttracks.track[0].date.uts) * 1000; // Convert to milliseconds
        const currentTime = Date.now();
        const timeDifference = currentTime - playedTimestamp;

        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        setTimeAgo(`${hours} hr${hours !== 1 ? 's' : ''} ${minutes} min${minutes !== 1 ? 's' : ''}`);
      } catch (error) {
        console.error('Error fetching Last.fm data:', error);
      }
    };

    fetchData();
  }, [apiKey, userName]);

  const handlePlayClick = () => {
    if (latestTrack) {
      // Construct a YouTube search URL using the title and artist
      const searchQuery = `${latestTrack.name} ${latestTrack.artist['#text']}`;
      const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`;
      
      // Open the YouTube search URL in a new tab
      window.open(youtubeUrl, '_blank');
    }
  };

  return (
    <div style={{ 
      maxWidth: '800px', 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ 
        fontSize: '25px', 
        marginBottom: '10px', 
        color: 'yellow',
      }}>Now Playing</h2>
      {latestTrack ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            style={{ 
              width: '55px', 
              height: '55px', 
              objectFit: 'cover', 
              marginRight: '10px', 
              fontWeight: 'bolder', 
              fontSize: '50px' 
            }} 
            src={latestTrack.image[2]['#text']} 
            alt="Album cover" 
          />
         
          <div style={{ flexGrow: 1 }}>
            <div><strong style={{ color: 'red' }}>Title:</strong> <span style={{ color: 'white' }}>{latestTrack.name}</span></div>
            <div><strong style={{ color: 'red' }}>Artist:</strong> <span style={{ color: 'white' }}>{latestTrack.artist['#text']}</span></div>
            {timeAgo !== null && (
  <div style={{ color: 'white', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
    <strong style={{ color: 'white' }}>Last Listened:</strong> <span style={{ color: 'white' }}>{timeAgo} ago</span>
  </div>
)}


          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default LastFmWidget;
