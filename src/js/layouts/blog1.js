import React from 'react';
import { Link } from 'react-router-dom';
import blogData from './Blog';

const BlogPost = () => (
  <div style={{ padding: '20px', maxWidth: '800px' }}>
    <div style={{ textAlign: 'left' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Blog Posts</h1>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        {blogData.map((item, index) => (
          <li key={index}>
            <Link to={item.externalUrl} target="_blank" rel="noopener noreferrer">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div style={{ textAlign: 'left', marginTop: '16px' }}>
      {/* Home Button */}
      <Link to="/">
        <button type="button">Home</button>
      </Link>
      {/* Experience Button */}
      <Link to="/experience">
        <button type="button">Experience</button>
      </Link>
    </div>
  </div>
);

export default BlogPost;
