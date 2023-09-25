import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const LastFmWidget = ({ apiKey, userName }) => {
  const [latestTrack, setLatestTrack] = useState(null);
  const [topAlbums, setTopAlbums] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topTags, setTopTags] = useState(null);

  useEffect(() => {
    // ... (Your existing fetchData code and other logic)
  }, [apiKey, userName]);

  return (
    <Card className="left-card" title={<Link to="/experience" style={{ color: 'yellow' }}>Music</Link>} bordered={false}>
      {/* Render top 1 of each category */}
      <div>
        {latestTrack && <div>Latest Track: {latestTrack.name}</div>}
        {topAlbums && <div>Top Album: {topAlbums[0].name}</div>}
        {topTracks && <div>Top Track: {topTracks[0].name}</div>}
        {topArtists && <div>Top Artist: {topArtists[0].name}</div>}
        {topTags && <div>Top Tag: {topTags[0].name}</div>}
      </div>
    </Card>
  );
};

export default LastFmWidget;
