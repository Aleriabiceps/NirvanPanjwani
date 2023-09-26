import React, { useEffect, useState } from 'react';
import { PlayCircleOutlined, CustomerServiceOutlined, ContainerOutlined } from '@ant-design/icons';

const Latestrack = ({ apiKey, userName }) => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);

  useEffect(() => {
    const fetchData = async (method, setStateFunc, period = 'overall') => {
      try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=${method}&user=${userName}&api_key=${apiKey}&format=json&limit=3&period=${period}`);
        const data = await response.json();
        setStateFunc(data.topalbums?.album || data.toptracks?.track || data.topartists?.artist || []);
      } catch (error) {
        console.error(`Error fetching ${method}:`, error);
      }
    };
  
    fetchData('user.gettopalbums', setTopAlbums, '7day');
    fetchData('user.gettoptracks', setTopTracks, '7day');
    fetchData('user.gettopartists', setTopArtists, '7day');  // If Last.fm API supports period for top artists, otherwise omit period
  
  }, [apiKey, userName]);
  

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
      
      <div>
      <h4><PlayCircleOutlined style={{ marginRight: '8px', color: '#e74c3c' }} />Top Tracks</h4>
      <ul style={{ paddingLeft: '20px', margin: '0' }}>
        {topTracks.map((track, index) => (
          <li key={index} style={{ marginBottom: '2px' }}>
            <span style={{ fontWeight: '200', fontFamily: 'Arial, sans-serif' }}>{track.name}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h4><ContainerOutlined style={{ marginRight: '8px', color: '#3498db', marginBottom: '-30px' }} />Top Albums</h4>
      <ul style={{ paddingLeft: '20px', margin: '0' }}>
        {topAlbums.map((album, index) => (
          <li key={index} style={{ marginBottom: '2px' }}>
            <span style={{ fontWeight: '200', fontFamily: 'Arial, sans-serif' }}>{album.name}</span>
          </li>
        ))}
      </ul>
    </div>
  
  
  
    <div>
      <h4><CustomerServiceOutlined style={{ marginRight: '8px', color: '#2ecc71' }} />Top Artists</h4>
      <ul style={{ paddingLeft: '20px', margin: '0' }}>
        {topArtists.map((artist, index) => (
          <li key={index} style={{ marginBottom: '2px' }}>
            <span style={{ fontWeight: '200', fontFamily: 'Arial, sans-serif' }}>{artist.name}</span>
          </li>
        ))}
      </ul>
    </div>
  
  </div>
  
  
  );
};

export default Latestrack;
