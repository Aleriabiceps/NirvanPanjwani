import React, { useEffect, useState } from 'react';

import { PlayCircleOutlined, CustomerServiceOutlined, FileTextOutlined, ContainerOutlined } from '@ant-design/icons';
const Latestrack = ({ apiKey, userName }) => {
  const [latestTrack, setLatestTrack] = useState(null);
  const [topAlbum, setTopAlbum] = useState(null);
  const [topTrack, setTopTrack] = useState(null);
  const [topArtist, setTopArtist] = useState(null);

  useEffect(() => {
    const fetchData = async (method) => {
      try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=${method}&user=${userName}&api_key=${apiKey}&format=json&limit=1`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(`Error fetching ${method}:`, error);
      }
    };

    const fetchAllData = async () => {
      const [latestTrackData, topAlbumData, topTrackData, topArtistData] = await Promise.all([
        fetchData('user.getrecenttracks'),
        fetchData('user.gettopalbums'),
        fetchData('user.gettoptracks'),
        fetchData('user.gettopartists')
      ]);

      setLatestTrack(latestTrackData?.recenttracks?.track[0]);
      setTopAlbum(topAlbumData?.topalbums?.album[0]);
      setTopTrack(topTrackData?.toptracks?.track[0]);
      setTopArtist(topArtistData?.topartists?.artist[0]);
    };

    fetchAllData();
  }, [apiKey, userName]);

  return (

    <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: '0' }}>
  
    {topAlbum && (
      <li style={{ marginBottom: '12px' }}>
        <ContainerOutlined style={{ marginRight: '8px', color: '#3498db' }} />
        <span style={{ fontWeight: '600', fontFamily: 'Arial, sans-serif' }}>Top Album: {topAlbum.name}</span>
      </li>
    )}
    
    {topTrack && (
      <li style={{ marginBottom: '12px' }}>
        <PlayCircleOutlined style={{ marginRight: '8px', color: '#e74c3c' }} />
        <span style={{ fontWeight: '600', fontFamily: 'Arial, sans-serif' }}>Top Track: {topTrack.name}</span>
      </li>
    )}
    
    {topArtist && (
      <li style={{ marginBottom: '12px' }}>
        <CustomerServiceOutlined style={{ marginRight: '8px', color: '#2ecc71' }} />
        <span style={{ fontWeight: '600', fontFamily: 'Arial, sans-serif' }}>Top Artist: {topArtist.name}</span>
      </li>
    )}
    
  </ul>


  );
};

export default Latestrack;
